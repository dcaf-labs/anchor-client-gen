import { Idl } from "@coral-xyz/anchor"
import {
  CodeBlockWriter,
  InterfaceDeclaration,
  Project,
  VariableDeclarationKind,
} from "ts-morph"
import {
  fieldToJSON,
  genIxIdentifier,
  idlTypeToJSONType,
  jsonInterfaceName,
  layoutForType,
  structFieldInitializer,
  tsTypeFromIdl,
} from "./common"
import { IdlAccountItem } from "@coral-xyz/anchor/dist/cjs/idl"
import camelcase from "camelcase"

export function genInstructions(
  project: Project,
  idl: Idl,
  outPath: (path: string) => string
) {
  if (idl.instructions.length === 0) {
    return
  }

  genIndexFile(project, idl, outPath)
  genInstructionFiles(project, idl, outPath)
}

function capitalize(s: string): string {
  return s[0].toUpperCase() + s.slice(1)
}

function argsInterfaceName(ixName: string) {
  return `${capitalize(ixName)}Args`
}

function ixInterfaceName(ixName: string) {
  return `${capitalize(ixName)}Instruction`
}

function accountsInterfaceName(ixName: string) {
  return `${capitalize(ixName)}Accounts`
}

function genIndexFile(
  project: Project,
  idl: Idl,
  outPath: (path: string) => string
) {
  const src = project.createSourceFile(outPath("instructions/index.ts"), "", {
    overwrite: true,
  })
  src.addStatements([
    `// This file was automatically generated. DO NOT MODIFY DIRECTLY.`,
  ])

  idl.instructions.forEach((ix) => {
    src.addExportDeclaration({
      moduleSpecifier: `./${ix.name}`,
    })

    const typeExports: string[] = []
    if (ix.args.length > 0) {
      typeExports.push(argsInterfaceName(ix.name))
    }
    if (ix.accounts.length > 0) {
      typeExports.push(accountsInterfaceName(ix.name))
    }
    if (typeExports.length > 0) {
      src.addExportDeclaration({
        namedExports: typeExports,
        isTypeOnly: true,
        moduleSpecifier: `./${ix.name}`,
      })
    }
  })
  if (idl.instructions.length > 0) {
    // Create the enum
    const ixEnum = src.addEnum({
      name: `${camelcase(idl.name, { pascalCase: true })}InstructionNames`,
      isExported: true,
    })
    for (const ix of idl.instructions) {
      ixEnum.addMember({
        name: ix.name,
        initializer: `"${ix.name}"`,
      })
    }
  }
}

function genInstructionFiles(
  project: Project,
  idl: Idl,
  outPath: (path: string) => string
) {
  idl.instructions.forEach((ix) => {
    const src = project.createSourceFile(
      outPath(`instructions/${ix.name}.ts`),
      "",
      {
        overwrite: true,
      }
    )
    src.addStatements([
      `// This file was automatically generated. DO NOT MODIFY DIRECTLY.`,
    ])
    // imports
    src.addStatements([
      `/* eslint-disable */`,
      `import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"`,
      `import BN from "bn.js"`,
      `import * as borsh from "@coral-xyz/borsh"`,
      ...(idl.types && idl.types.length > 0
        ? [`import * as types from "../types"`]
        : []),
    ])

    let argsInterface: InterfaceDeclaration | undefined = undefined
    if (ix.args.length > 0) {
      argsInterface = src.addInterface({
        isExported: true,
        name: argsInterfaceName(ix.name),
        properties: ix.args.map((arg) => {
          return {
            name: arg.name,
            type: tsTypeFromIdl(idl, arg.type, "types.", true),
            docs: arg.docs,
          }
        }),
      })
    }

    // args json interface
    let argsInterfaceJSON: InterfaceDeclaration | undefined = undefined
    if (argsInterface) {
      argsInterfaceJSON = src.addInterface({
        isExported: true,
        name: jsonInterfaceName(argsInterface.getName()),
        properties: ix.args.map((arg) => {
          return {
            name: arg.name,
            type: idlTypeToJSONType(arg.type),
            docs: arg.docs,
          }
        }),
      })
    }

    // accounts interface
    function genAccIfPropTypeRec(
      accItem: IdlAccountItem,
      writer: CodeBlockWriter,
      json = false
    ) {
      if (!("accounts" in accItem)) {
        if (json) {
          writer.write("string")
        } else {
          writer.write("PublicKey")
        }
        return
      }
      writer.block(() => {
        accItem.accounts.forEach((item) => {
          if (item.docs) {
            writer.writeLine(`/** ${item.docs.join(" ")} */`)
          }
          writer.write(`${item.name}: `)
          genAccIfPropTypeRec(item, writer, json)
          writer.newLine()
        })
      })
    }

    let accountsInterface: InterfaceDeclaration | undefined = undefined
    let accountsInterfaceJSON: InterfaceDeclaration | undefined = undefined
    if (ix.accounts.length > 0) {
      // accounts interface
      accountsInterface = src.addInterface({
        isExported: true,
        name: accountsInterfaceName(ix.name),
        properties: ix.accounts.map((acc) => {
          return {
            name: acc.name,
            type: (writer) => {
              genAccIfPropTypeRec(acc, writer, false)
            },
            docs: acc.docs,
          }
        }),
      })
      // accounts json interface
      accountsInterfaceJSON = src.addInterface({
        isExported: true,
        name: jsonInterfaceName(accountsInterface.getName()),
        properties: ix.accounts.map((acc) => {
          return {
            name: acc.name,
            type: (writer) => {
              genAccIfPropTypeRec(acc, writer, true)
            },
            docs: acc.docs,
          }
        }),
      })
    }

    const instructionInterface: InterfaceDeclaration = src.addInterface({
      isExported: true,
      name: ixInterfaceName(ix.name),
    })

    if (argsInterface) {
      instructionInterface.addProperty({
        name: "args",
        type: argsInterface.getName(),
      })
    } else {
      instructionInterface.addProperty({
        name: "args",
        type: "null",
      })
    }
    if (accountsInterface) {
      instructionInterface.addProperty({
        name: "accounts",
        type: accountsInterface.getName(),
      })
    } else {
      instructionInterface.addProperty({
        name: "accounts",
        type: "null",
      })
    }

    const instructionInterfaceJSON: InterfaceDeclaration = src.addInterface({
      isExported: true,
      name: jsonInterfaceName(instructionInterface.getName()),
    })
    if (argsInterfaceJSON) {
      instructionInterfaceJSON.addProperty({
        name: "args",
        type: argsInterfaceJSON.getName(),
      })
    } else {
      instructionInterfaceJSON.addProperty({
        name: "args",
        type: "null",
      })
    }
    if (accountsInterfaceJSON) {
      instructionInterfaceJSON.addProperty({
        name: "accounts",
        type: accountsInterfaceJSON.getName(),
      })
    } else {
      instructionInterfaceJSON.addProperty({
        name: "accounts",
        type: "null",
      })
    }

    // layout
    if (ix.args.length > 0) {
      src.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
          {
            name: "layout",
            initializer: (writer) => {
              writer.write("borsh.struct([")

              ix.args.forEach((arg) => {
                writer.writeLine(layoutForType(arg.type, arg.name) + ",")
              })

              writer.write("])")
            },
          },
        ],
      })
    }

    // instruction class
    const cls = src.addClass({
      isExported: true,
      name: capitalize(ix.name),
      docs: ix.docs && [ix.docs.join("\n")],
    })

    // name
    cls.addProperty({
      isStatic: true,
      isReadonly: true,
      name: "ixName",
      initializer: `'${ix.name}'`,
    })

    cls.addProperty({
      isStatic: true,
      isReadonly: true,
      name: "identifier",
      type: "Buffer",
      initializer: `Buffer.from([${genIxIdentifier(ix.name).toString()}])`,
    })

    cls.addConstructor({
      parameters: [
        {
          isReadonly: true,
          name: "instructionData",
          type: instructionInterface.getName(),
        },
      ],
    })
    const isIdentifierEqual = cls.addMethod({
      isStatic: true,
      name: "isIdentifierEqual",
      parameters: [
        {
          name: "ixData",
          type: "Buffer",
        },
      ],
      returnType: "boolean",
      statements: [
        (writer) => {
          writer.write(
            `return ixData.subarray(0, 8).equals(${cls.getName()}.identifier)`
          )
        },
      ],
    })

    // fromDecoded
    const fromDecodedMethod = cls.addMethod({
      isStatic: true,
      name: "fromDecoded",
      returnType: cls.getName(),
    })
    if (argsInterface) {
      fromDecodedMethod.addParameter({
        name: "args",
        type: argsInterface.getName(),
      })
    }
    if (ix.accounts.length > 0) {
      fromDecodedMethod.addParameter({
        name: "flattenedAccounts",
        type: "PublicKey[]",
      })
      fromDecodedMethod.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
          {
            name: "accounts",
            initializer: (writer) => {
              let accountIndex = 0
              function recurseAccounts(
                accs: IdlAccountItem[],
                nestedNames: string[]
              ) {
                accs.forEach((item) => {
                  if ("accounts" in item) {
                    writer.writeLine(`${item.name}: {`)
                    recurseAccounts(item.accounts, [...nestedNames, item.name])
                    writer.writeLine(`},`)
                  } else {
                    writer.writeLine(
                      `${item.name}: flattenedAccounts[${accountIndex}],`
                    )
                    accountIndex = accountIndex + 1
                  }
                })
              }
              writer.writeLine(`{`)
              recurseAccounts(ix.accounts, [])
              writer.writeLine("}")
            },
          },
        ],
      })
    }
    fromDecodedMethod.addStatements([
      `return new ${cls.getName()}({${argsInterface ? "args," : "args: null,"}${
        accountsInterface ? "accounts," : "accounts: null,"
      }})`,
    ])

    // toJSON
    const toArgsJSON = cls.addMethod({
      name: "toArgsJSON",
      returnType: argsInterfaceJSON ? argsInterfaceJSON.getName() : "null",
      statements: [
        (writer) => {
          if (!argsInterface) {
            writer.write("return null")
            return
          }
          writer.write(`const args = {`)
          for (const arg of ix.args) {
            writer.writeLine(
              `${arg.name}: ${structFieldInitializer(
                idl,
                arg,
                "this.instructionData.args."
              )},`
            )
          }
          writer.writeLine("}")

          writer.write(`return {`)
          ix.args.forEach((arg) => {
            writer.writeLine(`${arg.name}: ${fieldToJSON(idl, arg, "args.")},`)
          })
          writer.write("}")
        },
      ],
    })

    const toAccountsJSON = cls.addMethod({
      name: "toAccountsJSON",
      returnType: accountsInterfaceJSON
        ? accountsInterfaceJSON.getName()
        : "null",
      statements: [
        (writer) => {
          if (!accountsInterfaceJSON) {
            writer.writeLine("return null")
          }
          function recurseAccounts(
            accs: IdlAccountItem[],
            nestedNames: string[]
          ) {
            accs.forEach((item) => {
              if ("accounts" in item) {
                writer.writeLine(`${item.name}: {`)
                recurseAccounts(item.accounts, [...nestedNames, item.name])
                writer.writeLine(`},`)
              } else {
                writer.writeLine(
                  `${item.name}: this.instructionData.accounts.${[
                    ...nestedNames,
                    item.name,
                  ].join(".")}.toString(),`
                )
              }
            })
          }
          writer.writeLine(`return {`)
          recurseAccounts(ix.accounts, [])
          writer.writeLine("}")
        },
      ],
    })

    cls.addMethod({
      name: "toJSON",
      returnType: instructionInterfaceJSON.getName(),
      statements: [
        (writer) => {
          writer.writeLine(
            `return {args: this.${toArgsJSON.getName()}(), accounts: this.${toAccountsJSON.getName()}()}`
          )
        },
      ],
    })
  })
}
