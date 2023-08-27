import { PublicKey } from "@solana/web3.js"
import { expect, it } from "vitest"
import * as dircompare from "dir-compare"
import { State } from "./example-program-gen/act/accounts"
import { fromTxError } from "./example-program-gen/act/errors"
import { InvalidProgramId } from "./example-program-gen/act/errors/anchor"
import { BarStruct, FooStruct } from "./example-program-gen/act/types"
import {
  Named,
  NoFields,
  Struct,
  Unnamed,
} from "./example-program-gen/act/types/FooEnum"
import * as path from "path"

// const c = new Connection("http://127.0.0.1:8899", "processed")
// const faucet = JSON.parse(
// fs.readFileSync("tests/.test-ledger/faucet-keypair.json").toString()
// )
// const payer = Keypair.fromSecretKey(Uint8Array.from(faucet))

it("generator output", async () => {
  const res = await dircompare.compare(
    "tests/example-program-gen/exp",
    "tests/example-program-gen/act",
    {
      compareContent: true,
      compareFileAsync:
        dircompare.fileCompareHandlers.lineBasedFileCompare.compareAsync,
    }
  )
  res.diffSet?.forEach((diff) => {
    if (diff.state !== "equal") {
      const p1 =
        (diff.name1 && path.join("exp", diff.relativePath, diff.name1)) ||
        undefined
      const p2 =
        (diff.name2 && path.join("act", diff.relativePath, diff.name2)) ||
        undefined

      throw new Error(`${p1} is different from ${p2}: ${diff.reason}`)
    }
  })
})

// it("instruction with args", async () => {
//   const state = new Keypair()
//   const state2 = new Keypair()

//   const tx = new Transaction({ feePayer: payer.publicKey })
//   tx.add(
//     new InitializeWithValues(
//       {
//         boolField: true,
//         u8Field: 253,
//         i8Field: -120,
//         u16Field: 61234,
//         i16Field: -31253,
//         u32Field: 1234567899,
//         i32Field: -123456789,
//         f32Field: 123458.5,
//         u64Field: BigInt("9223372036854775810"),
//         i64Field: BigInt("-4611686018427387912"),
//         f64Field: 1234567892.445,
//         u128Field: BigInt("170141183460469231731687303715884105740"),
//         i128Field: BigInt("-85070591730234615865843651857942052877"),
//         bytesField: Uint8Array.from([5, 10, 255]),
//         stringField: "string value",
//         pubkeyField: new PublicKey(
//           "GDddEKTjLBqhskzSMYph5o54VYLQfPCR3PoFqKHLJK6s"
//         ),
//         vecField: [BigInt(1), BigInt("123456789123456789")],
//         vecStructField: [
//           new FooStruct({
//             field1: 1,
//             field2: 2,
//             nested: new BarStruct({
//               someField: true,
//               otherField: 55,
//             }),
//             vecNested: [
//               new BarStruct({
//                 someField: false,
//                 otherField: 11,
//               }),
//             ],
//             optionNested: null,
//             enumField: new Unnamed([
//               true,
//               22,
//               new BarStruct({
//                 someField: true,
//                 otherField: 33,
//               }),
//             ]),
//           }),
//         ],
//         optionField: true,
//         optionStructField: null,
//         structField: new FooStruct({
//           field1: 1,
//           field2: 2,
//           nested: new BarStruct({
//             someField: true,
//             otherField: 55,
//           }),
//           vecNested: [
//             new BarStruct({
//               someField: false,
//               otherField: 11,
//             }),
//           ],
//           optionNested: null,
//           enumField: new NoFields(),
//         }),
//         arrayField: [true, true, false],
//         enumField1: new Unnamed([
//           true,
//           15,
//           new BarStruct({
//             someField: false,
//             otherField: 200,
//           }),
//         ]),
//         enumField2: new Named({
//           boolField: true,
//           u8Field: 128,
//           nested: new BarStruct({
//             someField: false,
//             otherField: 1,
//           }),
//         }),
//         enumField3: new Struct([
//           new BarStruct({
//             someField: true,
//             otherField: 15,
//           }),
//         ]),
//         enumField4: new NoFields(),
//       },
//       {
//         state: state.publicKey,
//         payer: payer.publicKey,
//         nested: {
//           clock: SYSVAR_CLOCK_PUBKEY,
//           rent: SYSVAR_RENT_PUBKEY,
//         },
//         systemProgram: SystemProgram.programId,
//       }
//     ).build()
//   )
//   tx.add(
//     new InitializeWithValues2(
//       {
//         vecOfOption: [null, BigInt(20)],
//       },
//       {
//         state: state2.publicKey,
//         payer: payer.publicKey,
//         systemProgram: SystemProgram.programId,
//       }
//     ).build()
//   )

//   await sendAndConfirmTransaction(c, tx, [state, state2, payer])

//   const res = await State.fetch(c, state.publicKey)
//   if (res === null) {
//     throw new Error("account for State not found")
//   }
//   const res2 = await State2.fetch(c, state2.publicKey)
//   if (res2 === null) {
//     throw new Error("account for State2 not found")
//   }

//   expect(res.boolField).toBe(true)
//   expect(res.u8Field).toBe(253)
//   expect(res.i8Field).toBe(-120)
//   expect(res.u16Field).toBe(61234)
//   expect(res.i16Field).toBe(-31253)
//   expect(res.u32Field).toBe(1234567899)
//   expect(res.i32Field).toBe(-123456789)
//   expect(res.f32Field).toBe(123458.5)
//   expect(
//     res.u64Field.toString() === BigInt("9223372036854775810").toString()
//   ).toBe(true)
//   expect(
//     res.i64Field.toString() === BigInt("-4611686018427387912").toString()
//   ).toBe(true)
//   expect(res.f64Field).toBe(1234567892.445)
//   expect(
//     res.u128Field.toString() ===
//       BigInt("170141183460469231731687303715884105740").toString()
//   ).toBe(true)
//   expect(
//     res.i128Field.toString() ===
//       BigInt("-85070591730234615865843651857942052877").toString()
//   ).toBe(true)
//   expect(res.bytesField).toEqual(Uint8Array.from([5, 10, 255]))
//   expect(res.stringField).toBe("string value")
//   expect(
//     res.pubkeyField.equals(
//       new PublicKey("GDddEKTjLBqhskzSMYph5o54VYLQfPCR3PoFqKHLJK6s")
//     )
//   ).toBe(true)

//   // vecField
//   expect(res.vecField.length).toBe(2)
//   expect(res.vecField[0].toString() === BigInt("1").toString())
//   expect(res.vecField[1].toString() === BigInt("123456789123456789").toString())

//   // vecStructField
//   expect(res.vecStructField.length).toBe(1)
//   {
//     const act = res.vecStructField[0]

//     expect(act.field1).toBe(1)
//     expect(act.field2).toBe(2)

//     expect(act.nested.someField).toBe(true)
//     expect(act.nested.otherField).toBe(55)

//     expect(act.vecNested.length).toBe(1)
//     expect(act.vecNested[0].someField).toBe(false)
//     expect(act.vecNested[0].otherField).toBe(11)

//     expect(act.optionNested).toBeNull()

//     if (act.enumField.discriminator !== 0) {
//       throw new Error()
//     }
//     expect(act.enumField.kind).toBe("Unnamed")
//     expect(act.enumField.value.length).toBe(3)
//     expect(act.enumField.value[0]).toBe(true)
//     expect(act.enumField.value[1]).toBe(22)
//     expect(act.enumField.value[2].someField).toBe(true)
//     expect(act.enumField.value[2].otherField).toBe(33)
//   }

//   // optionField
//   expect(res.optionField).toBe(true)

//   // optionStructField
//   expect(res.optionStructField).toBeNull()

//   // structField
//   {
//     const act = res.structField

//     expect(act.field1).toBe(1)
//     expect(act.field2).toBe(2)

//     expect(act.nested.someField).toBe(true)
//     expect(act.nested.otherField).toBe(55)

//     expect(act.vecNested.length).toBe(1)
//     expect(act.vecNested[0].someField).toBe(false)
//     expect(act.vecNested[0].otherField).toBe(11)

//     expect(act.optionNested).toBeNull()

//     if (act.enumField.discriminator !== 6) {
//       throw new Error()
//     }
//     expect(act.enumField.kind).toBe("NoFields")
//   }

//   // arrayField
//   expect(res.arrayField).toStrictEqual([true, true, false])

//   // enumField1
//   {
//     const act = res.enumField1
//     if (act.discriminator !== 0) {
//       throw new Error()
//     }
//     expect(act.kind).toBe("Unnamed")
//     expect(act.value.length).toBe(3)
//     expect(act.value[0]).toBe(true)
//     expect(act.value[1]).toBe(15)
//     expect(act.value[2].someField).toBe(false)
//     expect(act.value[2].otherField).toBe(200)
//   }

//   // enumField2
//   {
//     const act = res.enumField2
//     if (act.discriminator !== 2) {
//       throw new Error()
//     }
//     expect(act.kind).toBe("Named")
//     expect(act.value.boolField).toBe(true)
//     expect(act.value.u8Field).toBe(128)
//     expect(act.value.nested.someField).toBe(false)
//     expect(act.value.nested.otherField).toBe(1)
//   }

//   // enumField3
//   {
//     const act = res.enumField3
//     if (act.discriminator !== 3) {
//       throw new Error()
//     }
//     expect(act.kind).toBe("Struct")
//     expect(act.value.length).toBe(1)
//     expect(act.value[0].someField).toBe(true)
//     expect(act.value[0].otherField).toBe(15)
//   }

//   // enumField4
//   {
//     const act = res.enumField4
//     if (act.discriminator !== 6) {
//       throw new Error()
//     }
//     expect(act.kind).toBe("NoFields")
//   }

//   // vecOfOption
//   expect(res2.vecOfOption[0]).toBe(null)
//   expect(
//     res2.vecOfOption[1] !== null &&
//       res2.vecOfOption[1].toString() === BigInt(20).toString()
//   ).toBe(true)
// })

// it("tx error", async () => {
//   const tx = new Transaction({ feePayer: payer.publicKey })

//   tx.add(new CauseError().build())

//   try {
//     await sendAndConfirmTransaction(c, tx, [payer])
//   } catch (e) {
//     const parsed = fromTxError(e)

//     expect(parsed).not.toBe(null)
//     if (parsed === null) {
//       throw new Error()
//     }

//     expect(parsed.message).toBe("6000: Example error.")
//     expect(parsed.code).toBe(6000)
//     expect(parsed.name).toBe("SomeError")
//     expect("msg" in parsed && parsed.msg).toBe("Example error.")
//     expect(parsed.logs).toStrictEqual([
//       "Program 3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8 invoke [1]",
//       "Program log: Instruction: CauseError",
//       "Program log: AnchorError thrown in programs/example-program/src/lib.rs:90. Error Code: SomeError. Error Number: 6000. Error Message: Example error..",
//       "Program 3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8 consumed 2385 of 200000 compute units",
//       "Program 3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8 failed: custom program error: 0x1770",
//     ])

//     return
//   }
// })

it("fromTxError", () => {
  it("returns null when CPI call fails", async () => {
    const errMock = {
      logs: [
        "Program 3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8 invoke [1]",
        "Program log: Instruction: CauseError",
        "Program 11111111111111111111111111111111 invoke [2]",
        "Allocate: requested 1000000000000000000, max allowed 10485760",
        "Program 11111111111111111111111111111111 failed: custom program error: 0x3",
        "Program 3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8 consumed 7958 of 1400000 compute units",
        "Program 3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8 failed: custom program error: 0x3",
      ],
    }

    expect(
      fromTxError(
        errMock,
        new PublicKey("3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8")
      )
    ).toBe(null)
  })

  it("parses anchor error correctly", () => {
    const errMock = {
      logs: [
        "Program 3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8 invoke [1]",
        "Program log: Instruction: CauseError",
        "Program log: AnchorError caused by account: system_program. Error Code: InvalidProgramId. Error Number: 3008. Error Message: Program ID was not as expected.",
        "Program log: Left:",
        "Program log: 24S58Cp5Myf6iGx4umBNd7RgDrZ9nkKzvkfFHBMDomNa",
        "Program log: Right:",
        "Program log: 11111111111111111111111111111111",
        "Program 3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8 consumed 5043 of 1400000 compute units",
        "Program 3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8 failed: custom program error: 0xbc0",
      ],
    }

    expect(
      fromTxError(
        errMock,
        new PublicKey("3rTQ3R4B2PxZrAyx7EUefySPgZY8RhJf16cZajbmrzp8")
      )
    ).toBeInstanceOf(InvalidProgramId)
  })
})

it("toJSON", async () => {
  const state = new State({
    boolField: true,
    u8Field: 255,
    i8Field: -120,
    u16Field: 62000,
    i16Field: -31000,
    u32Field: 123456789,
    i32Field: -123456789,
    f32Field: 123456.5,
    u64Field: BigInt("9223372036854775805"),
    i64Field: BigInt("4611686018427387910"),
    f64Field: 1234567891.35,
    u128Field: BigInt("170141183460469231731687303715884105760"),
    i128Field: BigInt("-85070591730234615865843651857942052897"),
    bytesField: Uint8Array.from([1, 255]),
    stringField: "a string",
    pubkeyField: new PublicKey("EPZP2wrcRtMxrAPJCXVEQaYD9eH7fH7h12YqKDcd4aS7"),
    vecField: [BigInt("10"), BigInt("1234567890123456")],
    vecStructField: [
      new FooStruct({
        field1: 5,
        field2: 6,
        nested: new BarStruct({
          someField: true,
          otherField: 15,
        }),
        vecNested: [
          new BarStruct({
            someField: true,
            otherField: 13,
          }),
        ],
        optionNested: null,
        enumField: new Unnamed([
          false,
          111,
          new BarStruct({
            someField: false,
            otherField: 11,
          }),
        ]),
      }),
    ],
    optionField: null,
    optionStructField: new FooStruct({
      field1: 8,
      field2: 9,
      nested: new BarStruct({
        someField: true,
        otherField: 17,
      }),
      vecNested: [
        new BarStruct({
          someField: true,
          otherField: 10,
        }),
      ],
      optionNested: new BarStruct({
        someField: false,
        otherField: 99,
      }),
      enumField: new NoFields(),
    }),
    structField: new FooStruct({
      field1: 11,
      field2: 12,
      nested: new BarStruct({
        someField: false,
        otherField: 177,
      }),
      vecNested: [
        new BarStruct({
          someField: true,
          otherField: 15,
        }),
      ],
      optionNested: new BarStruct({
        someField: true,
        otherField: 75,
      }),
      enumField: new NoFields(),
    }),
    arrayField: [true, false],
    enumField1: new Unnamed([
      false,
      157,
      new BarStruct({
        someField: true,
        otherField: 193,
      }),
    ]),
    enumField2: new Named({
      boolField: false,
      u8Field: 77,
      nested: new BarStruct({
        someField: true,
        otherField: 100,
      }),
    }),
    enumField3: new Struct([
      new BarStruct({
        someField: false,
        otherField: 122,
      }),
    ]),
    enumField4: new NoFields(),
  })

  const stateJSON = state.toJSON()

  expect(stateJSON).toStrictEqual({
    boolField: true,
    u8Field: 255,
    i8Field: -120,
    u16Field: 62000,
    i16Field: -31000,
    u32Field: 123456789,
    i32Field: -123456789,
    f32Field: 123456.5,
    u64Field: "9223372036854775805",
    i64Field: "4611686018427387910",
    f64Field: 1234567891.35,
    u128Field: "170141183460469231731687303715884105760",
    i128Field: "-85070591730234615865843651857942052897",
    bytesField: [1, 255],
    stringField: "a string",
    pubkeyField: "EPZP2wrcRtMxrAPJCXVEQaYD9eH7fH7h12YqKDcd4aS7",
    vecField: ["10", "1234567890123456"],
    vecStructField: [
      {
        field1: 5,
        field2: 6,
        nested: {
          someField: true,
          otherField: 15,
        },
        vecNested: [
          {
            someField: true,
            otherField: 13,
          },
        ],
        optionNested: null,
        enumField: {
          kind: "Unnamed",
          value: [
            false,
            111,
            {
              someField: false,
              otherField: 11,
            },
          ],
        },
      },
    ],
    optionField: null,
    optionStructField: {
      field1: 8,
      field2: 9,
      nested: {
        someField: true,
        otherField: 17,
      },
      vecNested: [
        {
          someField: true,
          otherField: 10,
        },
      ],
      optionNested: {
        someField: false,
        otherField: 99,
      },
      enumField: {
        kind: "NoFields",
      },
    },
    structField: {
      field1: 11,
      field2: 12,
      nested: {
        someField: false,
        otherField: 177,
      },
      vecNested: [
        {
          someField: true,
          otherField: 15,
        },
      ],
      optionNested: {
        someField: true,
        otherField: 75,
      },
      enumField: {
        kind: "NoFields",
      },
    },
    arrayField: [true, false],
    enumField1: {
      kind: "Unnamed",
      value: [
        false,
        157,
        {
          someField: true,
          otherField: 193,
        },
      ],
    },
    enumField2: {
      kind: "Named",
      value: {
        boolField: false,
        u8Field: 77,
        nested: {
          someField: true,
          otherField: 100,
        },
      },
    },
    enumField3: {
      kind: "Struct",
      value: [
        {
          someField: false,
          otherField: 122,
        },
      ],
    },
    enumField4: {
      kind: "NoFields",
    },
  })

  /**
   * fromJSON
   */
  const stateFromJSON = State.fromJSON(stateJSON)

  expect(stateFromJSON.data.boolField).toBe(state.data.boolField)
  expect(stateFromJSON.data.u8Field).toBe(state.data.u8Field)
  expect(stateFromJSON.data.i8Field).toBe(state.data.i8Field)
  expect(stateFromJSON.data.u16Field).toBe(state.data.u16Field)
  expect(stateFromJSON.data.i16Field).toBe(state.data.i16Field)
  expect(stateFromJSON.data.u32Field).toBe(state.data.u32Field)
  expect(stateFromJSON.data.i32Field).toBe(state.data.i32Field)
  expect(stateFromJSON.data.f32Field).toBe(state.data.f32Field)
  expect(stateFromJSON.data.u64Field.toString()).toBe(
    state.data.u64Field.toString()
  )
  expect(stateFromJSON.data.i64Field.toString()).toBe(
    state.data.i64Field.toString()
  )
  expect(stateFromJSON.data.f64Field).toBe(state.data.f64Field)
  expect(stateFromJSON.data.u128Field.toString()).toBe(
    state.data.u128Field.toString()
  )
  expect(stateFromJSON.data.i128Field.toString()).toBe(
    state.data.i128Field.toString()
  )
  expect(stateFromJSON.data.bytesField).toStrictEqual(state.data.bytesField)
  expect(stateFromJSON.data.stringField).toBe(state.data.stringField)
  expect(stateFromJSON.data.pubkeyField.toString()).toBe(
    state.data.pubkeyField.toString()
  )

  // vecField
  expect(stateFromJSON.data.vecField.length).toBe(2)
  expect(stateFromJSON.data.vecField[0].toString()).toBe(
    state.data.vecField[0].toString()
  )
  expect(stateFromJSON.data.vecField[1].toString()).toBe(
    state.data.vecField[1].toString()
  )

  // vecStructField
  expect(stateFromJSON.data.vecStructField.length).toBe(1)
  {
    const act = stateFromJSON.data.vecStructField[0]
    const exp = state.data.vecStructField[0]

    expect(act.field1).toBe(exp.field1)
    expect(act.field2).toBe(exp.field2)

    expect(act.nested.someField).toBe(exp.nested.someField)
    expect(act.nested.otherField).toBe(exp.nested.otherField)

    expect(act.vecNested.length).toBe(exp.vecNested.length)
    expect(act.vecNested[0].someField).toBe(exp.vecNested[0].someField)
    expect(act.vecNested[0].otherField).toBe(exp.vecNested[0].otherField)

    expect(act.optionNested).toBe(null)

    if (
      act.enumField.discriminator !== 0 ||
      exp.enumField.discriminator !== 0
    ) {
      throw new Error()
    }
    expect(act.enumField.kind).toBe("Unnamed")
    expect(act.enumField.value.length).toBe(exp.enumField.value.length)
    expect(act.enumField.value[0]).toBe(exp.enumField.value[0])
    expect(act.enumField.value[1]).toBe(exp.enumField.value[1])
    expect(act.enumField.value[2].someField).toBe(
      exp.enumField.value[2].someField
    )
    expect(act.enumField.value[2].otherField).toBe(
      exp.enumField.value[2].otherField
    )
  }

  // optionField
  expect(stateFromJSON.data.optionField).toBe(state.data.optionField)

  // optionStructField
  {
    const act = stateFromJSON.data.optionStructField
    const exp = state.data.optionStructField

    if (exp === null || act === null) {
      throw new Error()
    }

    expect(act.field1).toBe(exp.field1)
    expect(act.field2).toBe(exp.field2)

    expect(act.nested.someField).toBe(exp.nested.someField)
    expect(act.nested.otherField).toBe(exp.nested.otherField)

    expect(act.vecNested.length).toBe(exp.vecNested.length)
    expect(act.vecNested[0].someField).toBe(exp.vecNested[0].someField)
    expect(act.vecNested[0].otherField).toBe(exp.vecNested[0].otherField)

    expect(act.optionNested?.someField).toBe(exp.optionNested?.someField)
    expect(act.optionNested?.otherField).toBe(exp.optionNested?.otherField)

    if (
      act.enumField.discriminator !== 8 ||
      exp.enumField.discriminator !== 8
    ) {
      throw new Error()
    }
  }

  // structField
  {
    const act = stateFromJSON.data.structField
    const exp = state.data.structField

    if (exp === null || act === null) {
      throw new Error()
    }

    expect(act.field1).toBe(exp.field1)
    expect(act.field2).toBe(exp.field2)

    expect(act.optionNested?.someField).toBe(exp.optionNested?.someField)
    expect(act.optionNested?.otherField).toBe(exp.optionNested?.otherField)

    expect(act.vecNested.length).toBe(exp.vecNested.length)
    expect(act.vecNested[0].someField).toBe(exp.vecNested[0].someField)
    expect(act.vecNested[0].otherField).toBe(exp.vecNested[0].otherField)

    if (
      act.enumField.discriminator !== 8 ||
      exp.enumField.discriminator !== 8
    ) {
      throw new Error()
    }
  }

  // arrayField
  expect(stateFromJSON.data.arrayField).toStrictEqual(state.data.arrayField)

  // enumField1
  {
    const act = stateFromJSON.data.enumField1
    const exp = state.data.enumField1

    if (act.discriminator !== 0 || exp.discriminator !== 0) {
      throw new Error()
    }
    expect(act.kind).toBe("Unnamed")
    expect(act.value.length).toEqual(exp.value.length)
    expect(act.value[0]).toEqual(exp.value[0])
    expect(act.value[1]).toEqual(exp.value[1])
    expect(act.value[2].someField).toEqual(exp.value[2].someField)
    expect(act.value[2].otherField).toEqual(exp.value[2].otherField)
  }

  // enumField2
  {
    const act = stateFromJSON.data.enumField2
    const exp = state.data.enumField2

    if (act.discriminator !== 2 || exp.discriminator !== 2) {
      throw new Error()
    }
    expect(act.kind).toBe("Named")
    expect(act.value.boolField).toEqual(exp.value.boolField)
    expect(act.value.u8Field).toEqual(exp.value.u8Field)
    expect(act.value.nested.someField).toEqual(exp.value.nested.someField)
    expect(act.value.nested.otherField).toEqual(exp.value.nested.otherField)
  }

  // enumField3
  {
    const act = stateFromJSON.data.enumField3
    const exp = state.data.enumField3

    if (act.discriminator !== 3 || exp.discriminator !== 3) {
      throw new Error()
    }
    expect(act.kind).toBe("Struct")
    expect(act.value.length).toEqual(exp.value.length)
    expect(act.value[0].someField).toEqual(exp.value[0].someField)
    expect(act.value[0].otherField).toEqual(exp.value[0].otherField)
  }

  // enumField4
  {
    const act = stateFromJSON.data.enumField4
    if (act.discriminator !== 8) {
      throw new Error()
    }
    expect(act.kind).toBe("NoFields")
  }
})
