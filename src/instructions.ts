import { Idl } from "@coral-xyz/anchor"
import {
  CodeBlockWriter,
  OptionalKind,
  ParameterDeclarationStructure,
  Project,
  VariableDeclarationKind,
} from "ts-morph"
import {
  fieldToEncodable,
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

function argsFieldsInterfaceName(ixName: string) {
  return `${capitalize(ixName)}Fields`
}

function argsInterfaceName(ixName: string) {
  return `${capitalize(ixName)}Args`
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
      typeExports.push(argsFieldsInterfaceName(ix.name))
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
      `import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars`,
      `import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars`,
      `import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars`,
      ...(idl.types && idl.types.length > 0
        ? [
            `import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars`,
          ]
        : []),
      `import { PROGRAM_ID } from "../programId"`,
    ])

    if (ix.args.length > 0) {
      // args fields interface
      src.addStatements([
        `// ${argsFieldsInterfaceName(ix.name)} are raw anchor decoded values`,
      ])
      src.addInterface({
        isExported: true,
        name: argsFieldsInterfaceName(ix.name),
        properties: ix.args.map((arg) => {
          return {
            name: arg.name,
            type: tsTypeFromIdl(idl, arg.type),
            docs: arg.docs,
          }
        }),
      })
      // args interface
      src.addStatements([
        `// ${argsInterfaceName(
          ix.name
        )} convert properties to type classes if available. This is used for converting to JSON`,
      ])
      src.addInterface({
        isExported: true,
        name: argsInterfaceName(ix.name),
        properties: ix.args.map((arg) => {
          return {
            name: arg.name,
            type: tsTypeFromIdl(idl, arg.type, "types.", false),
            docs: arg.docs,
          }
        }),
      })
    }

    // args json interface
    if (ix.args.length > 0) {
      src.addInterface({
        isExported: true,
        name: jsonInterfaceName(argsFieldsInterfaceName(ix.name)),
        properties: ix.args.map((arg) => {
          return {
            name: arg.name,
            type: idlTypeToJSONType(arg.type),
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

    if (ix.accounts.length > 0) {
      src.addInterface({
        isExported: true,
        name: accountsInterfaceName(ix.name),
        properties: ix.accounts.map((acc) => {
          return {
            name: acc.name,
            type: (writer) => {
              genAccIfPropTypeRec(acc, writer, false)
            },
            docs: acc.docs && [acc.docs.join("\n")],
          }
        }),
      })
    }

    // accounts json interface
    if (ix.accounts.length > 0) {
      src.addInterface({
        isExported: true,
        name: jsonInterfaceName(accountsInterfaceName(ix.name)),
        properties: ix.accounts.map((acc) => {
          return {
            name: acc.name,
            type: (writer) => {
              genAccIfPropTypeRec(acc, writer, true)
            },
            docs: acc.docs && [acc.docs.join("\n")],
          }
        }),
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
      isReadonly: true,
      name: "identifier",
      type: "Buffer",
    })
    cls.addProperty({
      isReadonly: true,
      name: "keys",
      type: "Array<AccountMeta>",
    })

    const constructorParameters: OptionalKind<ParameterDeclarationStructure>[] =
      []

    // args
    if (ix.args.length > 0) {
      cls.addProperty({
        isReadonly: true,
        name: "args",
        type: argsInterfaceName(ix.name),
      })
      constructorParameters.push({
        isReadonly: true,
        name: "fields",
        type: argsFieldsInterfaceName(ix.name),
      })
    }
    // accounts
    if (ix.accounts.length > 0) {
      constructorParameters.push({
        isReadonly: true,
        name: "accounts",
        type: accountsInterfaceName(ix.name),
      })
    }

    constructorParameters.push({
      isReadonly: true,
      name: "programId",
      type: "PublicKey",
      initializer: "PROGRAM_ID",
    })

    cls.addConstructor({
      parameters: constructorParameters,
      statements: (writer) => {
        writer.writeLine(
          `this.identifier = Buffer.from([${genIxIdentifier(
            ix.name
          ).toString()}])`
        )

        function recurseAccounts(
          accs: IdlAccountItem[],
          nestedNames: string[]
        ) {
          accs.forEach((item) => {
            if ("accounts" in item) {
              recurseAccounts(item.accounts, [...nestedNames, item.name])
              return
            }
            writer.writeLine(
              `{ pubkey: this.accounts.${[...nestedNames, item.name].join(
                "."
              )}, isSigner: ${item.isSigner}, isWritable: ${item.isMut} },`
            )
          })
        }
        writer.write(`this.keys = [`)
        recurseAccounts(ix.accounts, [])
        writer.writeLine("]")

        // initialize args by converting to classes
        if (ix.args.length > 0) {
          writer.write(`this.args = {`)
          for (const arg of ix.args) {
            writer.writeLine(
              `${arg.name}: ${structFieldInitializer(idl, arg)},`
            )
          }
          writer.writeLine("}")
        }
      },
    })

    // fromDecoded
    const fromDecodedMethod = cls.addMethod({
      isStatic: true,
      name: "fromDecoded",
    })
    if (ix.args.length > 0) {
      fromDecodedMethod.addParameter({
        name: "fields",
        type: argsFieldsInterfaceName(ix.name),
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
      `return new ${capitalize(ix.name)}(${
        ix.args.length > 0 ? "fields," : ""
      }${ix.accounts.length > 0 ? "accounts" : ""})`,
    ])

    // build
    const buildMethod = cls.addMethod({
      name: "build",
    })
    if (ix.args.length > 0) {
      buildMethod.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
          {
            name: "buffer",
            initializer: "Buffer.alloc(1000)", // TODO: use a tighter buffer.
          },
        ],
      })
      buildMethod.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
          {
            name: "len",
            initializer: (writer) => {
              writer.write("layout.encode({")

              ix.args.forEach((arg) => {
                writer.writeLine(
                  `${arg.name}: ${fieldToEncodable(idl, arg, "this.fields.")},`
                )
              })

              writer.write("}, buffer)")
            },
          },
        ],
      })
      buildMethod.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
          {
            name: "data",
            initializer:
              "Buffer.concat([this.identifier, buffer]).slice(0, 8 + len)",
          },
        ],
      })
    } else {
      buildMethod.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
          {
            name: "data",
            initializer: "this.identifier",
          },
        ],
      })
    }

    // ret
    buildMethod.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "ix",
          initializer:
            "new TransactionInstruction({ keys: this.keys, programId: this.programId, data })",
        },
      ],
    })

    buildMethod.addStatements("return ix")

    // toJSON
    if (ix.args.length > 0) {
      cls.addMethod({
        name: "toArgsJSON",
        returnType: jsonInterfaceName(argsFieldsInterfaceName(ix.name)),
        statements: [
          (writer) => {
            writer.write(`return {`)
            ix.args.forEach((arg) => {
              writer.writeLine(
                `${arg.name}: ${fieldToJSON(idl, arg, "this.args.")},`
              )
            })
            writer.write("}")
          },
        ],
      })
    }
    if (ix.accounts.length > 0) {
      cls.addMethod({
        name: "toAccountsJSON",
        returnType: jsonInterfaceName(accountsInterfaceName(ix.name)),
        statements: [
          (writer) => {
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
                    `${item.name}: this.accounts.${[
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
    }
  })
}
