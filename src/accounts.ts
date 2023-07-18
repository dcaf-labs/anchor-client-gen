import { Idl } from "@coral-xyz/anchor"
import { Project } from "ts-morph"
import {
  accountInterfaceName,
  fieldFromDecoded,
  fieldFromJSON,
  fieldToJSON,
  genAccDiscriminator,
  idlTypeToJSONType,
  jsonInterfaceName,
  layoutForType,
  structFieldInitializer,
  tsTypeFromIdl,
} from "./common"

export function genAccounts(
  project: Project,
  idl: Idl,
  outPath: (path: string) => string
) {
  if (idl.accounts === undefined || idl.accounts.length === 0) {
    return
  }

  genIndexFile(project, idl, outPath)
  genAccountFiles(project, idl, outPath)
}

function genIndexFile(
  project: Project,
  idl: Idl,
  outPath: (path: string) => string
) {
  const src = project.createSourceFile(outPath("accounts/index.ts"), "", {
    overwrite: true,
  })
  src.addStatements([
    `// This file was automatically generated. DO NOT MODIFY DIRECTLY.`,
  ])
  idl.accounts?.forEach((ix) => {
    src.addExportDeclaration({
      namedExports: [ix.name],
      moduleSpecifier: `./${ix.name}`,
    })
    src.addExportDeclaration({
      namedExports: [
        accountInterfaceName(ix.name),
        jsonInterfaceName(accountInterfaceName(ix.name)),
      ],
      isTypeOnly: true,
      moduleSpecifier: `./${ix.name}`,
    })
  })
}

function genAccountFiles(
  project: Project,
  idl: Idl,
  outPath: (path: string) => string
) {
  idl.accounts?.forEach((acc) => {
    const src = project.createSourceFile(
      outPath(`accounts/${acc.name}.ts`),
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
      `import { PublicKey, Connection } from "@solana/web3.js"`,
      `import * as borsh from "@coral-xyz/borsh"`,
      ...(idl.types && idl.types.length > 0
        ? [`import * as types from "../types"`]
        : []),
    ])

    const fields = acc.type.fields
    const name = acc.name

    // fields interface
    const accountInterface = src.addInterface({
      isExported: true,
      name: accountInterfaceName(name),
      properties: fields.map((field) => {
        return {
          name: field.name,
          type: tsTypeFromIdl(idl, field.type),
          docs: field.docs && [field.docs.join("\n")],
        }
      }),
    })

    // json interface
    const accountInterfaceJSON = src.addInterface({
      isExported: true,
      name: jsonInterfaceName(accountInterfaceName(name)),
      properties: fields.map((field) => {
        return {
          name: field.name,
          type: idlTypeToJSONType(field.type),
          docs: field.docs && [field.docs.join("\n")],
        }
      }),
    })

    // account class
    const cls = src.addClass({
      isExported: true,
      name: name,
      properties: fields.map((field) => {
        return {
          isReadonly: true,
          name: field.name,
          type: tsTypeFromIdl(idl, field.type, "types.", false),
          docs: field.docs && [field.docs.join("\n")],
        }
      }),
      docs: (acc as any).docs && [(acc as any).docs.join("\n")],
    })

    // discriminator
    cls
      .addProperty({
        isStatic: true,
        isReadonly: true,
        name: "discriminator",
        initializer: `Buffer.from([${genAccDiscriminator(name).toString()}])`,
      })
      .prependWhitespace("\n")

    // layout
    cls
      .addProperty({
        isStatic: true,
        isReadonly: true,
        name: "layout",
        initializer: (writer) => {
          writer.write("borsh.struct([")

          fields.forEach((field) => {
            writer.writeLine(layoutForType(field.type, field.name) + ",")
          })

          writer.write("])")
        },
      })
      .prependWhitespace("\n")

    // constructor
    cls.addConstructor({
      parameters: [
        {
          name: "fields",
          type: accountInterface.getName(),
        },
      ],
      statements: (writer) => {
        fields.forEach((field) => {
          const initializer = structFieldInitializer(idl, field)
          writer.writeLine(`this.${field.name} = ${initializer}`)
        })
      },
    })

    // fetch
    cls.addMethod({
      isStatic: true,
      isAsync: true,
      name: "fetch",
      parameters: [
        {
          name: "c",
          type: "Connection",
        },
        {
          name: "address",
          type: "PublicKey",
        },
        {
          name: "programId",
          type: "PublicKey",
        },
      ],
      returnType: `Promise<${name} | null>`,
      statements: [
        (writer) => {
          writer.writeLine("const info = await c.getAccountInfo(address)")
          writer.blankLine()
          writer.write("if (info === null)")
          writer.inlineBlock(() => {
            writer.writeLine("return null")
          })
          writer.write("if (!info.owner.equals(programId))")
          writer.inlineBlock(() => {
            writer.writeLine(
              `throw new Error("account doesn't belong to this program")`
            )
          })
          writer.blankLine()
          writer.writeLine("return this.decode(info.data)")
        },
      ],
    })

    // decode
    cls.addMethod({
      isStatic: true,
      name: "decode",
      parameters: [
        {
          name: "data",
          type: "Buffer",
        },
      ],
      returnType: name,
      statements: [
        (writer) => {
          writer.write(
            `if (!data.subarray(0, 8).equals(${name}.discriminator))`
          )
          writer.inlineBlock(() => {
            writer.writeLine(`throw new Error("invalid account discriminator")`)
          })
          writer.blankLine()
          writer.writeLine(
            `const dec = ${name}.layout.decode(data.subarray(8))`
          )

          writer.blankLine()
          writer.write(`return new ${name}({`)
          fields.forEach((field) => {
            const decoded = fieldFromDecoded(idl, field, "dec.")
            writer.writeLine(`${field.name}: ${decoded},`)
          })
          writer.write("})")
        },
      ],
    })

    // toJSON
    cls.addMethod({
      name: "toJSON",
      returnType: accountInterfaceJSON.getName(),
      statements: [
        (writer) => {
          writer.write(`return {`)

          fields.forEach((field) => {
            writer.writeLine(
              `${field.name}: ${fieldToJSON(idl, field, "this.")},`
            )
          })

          writer.write("}")
        },
      ],
    })

    // fromJSON
    cls.addMethod({
      isStatic: true,
      name: "fromJSON",
      returnType: name,
      parameters: [
        {
          name: "obj",
          type: accountInterfaceJSON.getName(),
        },
      ],
      statements: [
        (writer) => {
          writer.write(`return new ${name}({`)

          fields.forEach((field) => {
            writer.writeLine(`${field.name}: ${fieldFromJSON(field)},`)
          })

          writer.write("})")
        },
      ],
    })
  })
}
