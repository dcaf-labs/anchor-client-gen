import { Idl } from "@coral-xyz/anchor"
import { Project } from "ts-morph"
import {
  eventInterfaceName,
  fieldFromDecoded,
  fieldFromJSON,
  fieldToJSON,
  genEventDiscriminator,
  idlTypeToJSONType,
  jsonInterfaceName,
  layoutForType,
  structFieldInitializer,
  tsTypeFromIdl,
} from "./common"
import { IdlEvent } from "@coral-xyz/anchor/dist/cjs/idl"

export function genEvents(
  project: Project,
  idl: Idl,
  outPath: (path: string) => string
) {
  if (idl.events === undefined || idl.events.length === 0) {
    return
  }

  genIndexFile(project, idl, outPath)
  genEventFiles(project, idl, outPath)
}

function genIndexFile(
  project: Project,
  idl: Idl,
  outPath: (path: string) => string
) {
  const src = project.createSourceFile(outPath("events/index.ts"), "", {
    overwrite: true,
  })
  src.addStatements([
    `// This file was automatically generated. DO NOT MODIFY DIRECTLY.`,
  ])
  idl.events?.forEach((event) => {
    src.addImportDeclaration({
      namedImports: [{ name: event.name }],
      moduleSpecifier: `./${event.name}`,
    })
    src.addExportDeclaration({
      namedExports: [event.name],
      moduleSpecifier: `./${event.name}`,
    })
    src.addExportDeclaration({
      namedExports: [
        eventInterfaceName(event.name),
        jsonInterfaceName(eventInterfaceName(event.name)),
      ],
      isTypeOnly: true,
      moduleSpecifier: `./${event.name}`,
    })
  })
}

function genEventFiles(
  project: Project,
  idl: Idl,
  outPath: (path: string) => string
) {
  idl.events?.forEach((acc: IdlEvent) => {
    const src = project.createSourceFile(outPath(`events/${acc.name}.ts`), "", {
      overwrite: true,
    })
    src.addStatements([
      `// This file was automatically generated. DO NOT MODIFY DIRECTLY.`,
    ])
    // imports
    src.addStatements([
      `/* eslint-disable */`,
      `import * as base64 from "base64-js"`,
      `import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"`,
      `import * as borsh from "@coral-xyz/borsh"`,
      ...(idl.types && idl.types.length > 0
        ? [`import * as types from "../types"`]
        : []),
    ])

    const fields = acc.fields
    const name = acc.name

    // fields interface
    const eventInterface = src.addInterface({
      isExported: true,
      name: eventInterfaceName(name),
      properties: fields.map((field) => {
        return {
          name: field.name,
          type: tsTypeFromIdl(idl, field.type),
        }
      }),
    })

    // json interface
    const eventInterfaceJSON = src.addInterface({
      isExported: true,
      name: jsonInterfaceName(eventInterfaceName(name)),
      properties: fields.map((field) => {
        return {
          name: field.name,
          type: idlTypeToJSONType(field.type),
        }
      }),
    })

    // event class
    const cls = src.addClass({
      isExported: true,
      name: name,
      properties: [
        {
          isReadonly: true,
          name: "data",
          type: eventInterface.getName(),
        },
      ],
    })

    // discriminator
    cls
      .addProperty({
        isStatic: true,
        isReadonly: true,
        name: "discriminator",
        initializer: `Buffer.from([${genEventDiscriminator(name).toString()}])`,
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
          name: "eventData",
          type: eventInterface.getName(),
        },
      ],
      statements: (writer) => {
        writer.write("this.data = ")
        writer.inlineBlock(() => {
          fields.forEach((field) => {
            const initializer = structFieldInitializer(idl, field, "eventData.")
            writer.writeLine(`${field.name}: ${initializer},`)
          })
        })
      },
    })

    // isAccount
    const isDiscriminatorEqual = cls.addMethod({
      isStatic: true,
      name: `isDiscriminatorEqual`,
      parameters: [
        {
          name: "data",
          type: "Buffer",
        },
      ],
      returnType: "boolean",
      statements: [
        (writer) => {
          writer.write(
            `return data.subarray(0, 8).equals(${name}.discriminator)`
          )
        },
      ],
    })

    // decode
    const decode = cls.addMethod({
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
            `if (!${cls.getName()}.${isDiscriminatorEqual.getName()}(data))`
          )
          writer.inlineBlock(() => {
            writer.writeLine(`throw new Error("Invalid event discriminator.")`)
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

    // Example logs:
    // [
    //   'Program dripTrkvSyQKvkyWg7oi4jmeEGMA5scSYowHArJ9Vwk invoke [1]',
    //   'Program log: Instruction: InitVaultPeriod',
    //   'Program 11111111111111111111111111111111 invoke [2]',
    //   'Program 11111111111111111111111111111111 success',
    //   'Program log: Initialized VaultPeriod',
    //   'Program dripTrkvSyQKvkyWg7oi4jmeEGMA5scSYowHArJ9Vwk consumed 20262 of 400000 compute units',
    //   'Program dripTrkvSyQKvkyWg7oi4jmeEGMA5scSYowHArJ9Vwk success',
    //   'Program dripTrkvSyQKvkyWg7oi4jmeEGMA5scSYowHArJ9Vwk invoke [1]',
    //   'Program log: Instruction: DripOrcaWhirlpool',
    //   'Program log: drip_amount 26000000',
    //   'Program log: current_balance_a 102000018',
    //   'Program log: current_balance_b 1741508186',
    //   'Program log: a_to_b: false',
    //   'Program whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc invoke [2]',
    //   'Program log: Instruction: Swap',
    //   'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]',
    //   'Program log: Instruction: Transfer',
    //   'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4645 of 300989 compute units',
    //   'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success',
    //   'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]',
    //   'Program log: Instruction: Transfer',
    //   'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4736 of 292706 compute units',
    //   'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success',
    //   'Program whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc consumed 52407 of 334099 compute units',
    //   'Program whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc success',
    //   'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]',
    //   'Program log: Instruction: Transfer',
    //   'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4645 of 278315 compute units',
    //   'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success',
    //   'Program log: new_drip_trigger_fee_balance_a 6813671',
    //   'Program log: new_balance_a 76000018',
    //   'Program log: new_balance_b 2470883477',
    //   'Program dripTrkvSyQKvkyWg7oi4jmeEGMA5scSYowHArJ9Vwk consumed 118304 of 379738 compute units',
    //   'Program dripTrkvSyQKvkyWg7oi4jmeEGMA5scSYowHArJ9Vwk success'
    // ]

    // parseLogs
    const parseLogs = cls.addMethod({
      isStatic: true,
      name: "*parseLogs",
      parameters: [
        {
          name: "logs",
          type: "string[]",
        },
        {
          name: "programId",
          type: "PublicKey",
        },
        {
          name: "errorOnDecodeFailure",
          type: "boolean",
          initializer: "false",
        },
      ],
      returnType: `IterableIterator<${cls.getName()}>`,
      statements: [
        (writer) => {
          writer.writeLine(`const events: ${cls.getName()}[] = [];`)
          writer.writeLine("let log = logs.pop()")
          writer.writeLine("if (!log) { return }")

          writer.writeLine(`let currentProgramId:string = "";`)

          writer.writeLine(
            `const programStartRe = /Program ([A-z0-9]+) invoke \\[[0-9]+\\]/`
          )
          writer.writeLine(`const ixDataStart = /Program (log|data): (.+)/`)

          writer.writeLine("while (log) {")

          writer.writeLine(`if(programStartRe.test(log)) {`)
          writer.writeLine(`currentProgramId = log.match(programStartRe)![1]`)
          writer.writeLine(
            `} else if (currentProgramId === programId.toString() && ixDataStart.test(log)) {`
          )

          writer.writeLine("try {")
          writer.writeLine(`const eventDataStr = log.match(ixDataStart)![2]`)
          writer.writeLine(
            `const event = ${cls.getName()}.decode(Buffer.from(base64.toByteArray(eventDataStr)));`
          )
          writer.writeLine("yield event;")
          writer.writeLine("} catch(err) {")
          writer.writeLine("if(errorOnDecodeFailure) { throw err }")
          // close catch
          writer.writeLine("}")

          // close else if
          writer.writeLine("}")

          writer.write(`log = logs.pop();`)
          // close while
          writer.writeLine("}")
        },
      ],
    })
    // toJSON
    const staticToJSON = cls.addMethod({
      isStatic: true,
      name: "toJSON",
      parameters: [
        {
          name: "data",
          type: eventInterface.getName(),
        },
      ],
      returnType: eventInterfaceJSON.getName(),
      statements: [
        (writer) => {
          writer.writeLine("// convert fields to classes if needed")
          writer.write(`const event = {`)
          for (const field of fields) {
            writer.writeLine(
              `${field.name}: ${structFieldInitializer(idl, field, "data.")},`
            )
          }
          writer.writeLine("}")

          writer.write(`return {`)

          fields.forEach((field) => {
            writer.writeLine(
              `${field.name}: ${fieldToJSON(idl, field, "event.")},`
            )
          })
          writer.write("}")
        },
      ],
    })

    cls.addMethod({
      name: "toJSON",
      returnType: eventInterfaceJSON.getName(),
      statements: [
        (writer) => {
          writer.write(
            `return ${cls.getName()}.${staticToJSON.getName()}(this.data)`
          )
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
          type: eventInterfaceJSON.getName(),
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
