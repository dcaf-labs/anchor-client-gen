// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface InitializeEventEvent {
  boolField: boolean
  u8Field: number
  i8Field: number
  u16Field: number
  i16Field: number
  u32Field: number
  i32Field: number
  f32Field: number
  u64Field: bigint
  i64Field: bigint
  f64Field: number
  u128Field: bigint
  i128Field: bigint
  bytesField: Uint8Array
  stringField: string
  pubkeyField: PublicKey
  vecField: Array<bigint>
  vecStructField: Array<types.FooStructFields>
  optionField: boolean | null
  optionStructField: types.FooStructFields | null
  structField: types.FooStructFields
  arrayField: Array<boolean>
  enumField1: types.FooEnumKind
  enumField2: types.FooEnumKind
  enumField3: types.FooEnumKind
  enumField4: types.FooEnumKind
  payer: PublicKey
}

export interface InitializeEventEventJSON {
  boolField: boolean
  u8Field: number
  i8Field: number
  u16Field: number
  i16Field: number
  u32Field: number
  i32Field: number
  f32Field: number
  u64Field: string
  i64Field: string
  f64Field: number
  u128Field: string
  i128Field: string
  bytesField: Array<number>
  stringField: string
  pubkeyField: string
  vecField: Array<string>
  vecStructField: Array<types.FooStructJSON>
  optionField: boolean | null
  optionStructField: types.FooStructJSON | null
  structField: types.FooStructJSON
  arrayField: Array<boolean>
  enumField1: types.FooEnumJSON
  enumField2: types.FooEnumJSON
  enumField3: types.FooEnumJSON
  enumField4: types.FooEnumJSON
  payer: string
}

export class InitializeEvent {
  readonly data: InitializeEventEvent

  static readonly discriminator = Buffer.from([
    206, 175, 169, 208, 241, 210, 35, 221,
  ])

  static readonly layout = borsh.struct([
    borsh.bool("boolField"),
    borsh.u8("u8Field"),
    borsh.i8("i8Field"),
    borsh.u16("u16Field"),
    borsh.i16("i16Field"),
    borsh.u32("u32Field"),
    borsh.i32("i32Field"),
    borsh.f32("f32Field"),
    borsh.u64("u64Field"),
    borsh.i64("i64Field"),
    borsh.f64("f64Field"),
    borsh.u128("u128Field"),
    borsh.i128("i128Field"),
    borsh.vecU8("bytesField"),
    borsh.str("stringField"),
    borsh.publicKey("pubkeyField"),
    borsh.vec(borsh.u64(), "vecField"),
    borsh.vec(types.FooStruct.layout(), "vecStructField"),
    borsh.option(borsh.bool(), "optionField"),
    borsh.option(types.FooStruct.layout(), "optionStructField"),
    types.FooStruct.layout("structField"),
    borsh.array(borsh.bool(), 3, "arrayField"),
    types.FooEnum.layout("enumField1"),
    types.FooEnum.layout("enumField2"),
    types.FooEnum.layout("enumField3"),
    types.FooEnum.layout("enumField4"),
    borsh.publicKey("payer"),
  ])

  constructor(eventData: InitializeEventEvent) {
    this.data = {
      boolField: eventData.boolField,
      u8Field: eventData.u8Field,
      i8Field: eventData.i8Field,
      u16Field: eventData.u16Field,
      i16Field: eventData.i16Field,
      u32Field: eventData.u32Field,
      i32Field: eventData.i32Field,
      f32Field: eventData.f32Field,
      u64Field: eventData.u64Field,
      i64Field: eventData.i64Field,
      f64Field: eventData.f64Field,
      u128Field: eventData.u128Field,
      i128Field: eventData.i128Field,
      bytesField: eventData.bytesField,
      stringField: eventData.stringField,
      pubkeyField: eventData.pubkeyField,
      vecField: eventData.vecField,
      vecStructField: eventData.vecStructField.map(
        (item) => new types.FooStruct({ ...item })
      ),
      optionField: eventData.optionField,
      optionStructField:
        (eventData.optionStructField &&
          new types.FooStruct({ ...eventData.optionStructField })) ||
        null,
      structField: new types.FooStruct({ ...eventData.structField }),
      arrayField: eventData.arrayField,
      enumField1: eventData.enumField1,
      enumField2: eventData.enumField2,
      enumField3: eventData.enumField3,
      enumField4: eventData.enumField4,
      payer: eventData.payer,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(InitializeEvent.discriminator)
  }

  static decode(data: Buffer): InitializeEvent {
    if (!InitializeEvent.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = InitializeEvent.layout.decode(data.subarray(8))

    return new InitializeEvent({
      boolField: dec.boolField,
      u8Field: dec.u8Field,
      i8Field: dec.i8Field,
      u16Field: dec.u16Field,
      i16Field: dec.i16Field,
      u32Field: dec.u32Field,
      i32Field: dec.i32Field,
      f32Field: dec.f32Field,
      u64Field: dec.u64Field,
      i64Field: dec.i64Field,
      f64Field: dec.f64Field,
      u128Field: dec.u128Field,
      i128Field: dec.i128Field,
      bytesField: new Uint8Array(
        dec.bytesField.buffer,
        dec.bytesField.byteOffset,
        dec.bytesField.length
      ),
      stringField: dec.stringField,
      pubkeyField: dec.pubkeyField,
      vecField: dec.vecField,
      vecStructField: dec.vecStructField.map((item: any) =>
        types.FooStruct.fromDecoded(item)
      ),
      optionField: dec.optionField,
      optionStructField:
        (dec.optionStructField &&
          types.FooStruct.fromDecoded(dec.optionStructField)) ||
        null,
      structField: types.FooStruct.fromDecoded(dec.structField),
      arrayField: dec.arrayField,
      enumField1: types.FooEnum.fromDecoded(dec.enumField1),
      enumField2: types.FooEnum.fromDecoded(dec.enumField2),
      enumField3: types.FooEnum.fromDecoded(dec.enumField3),
      enumField4: types.FooEnum.fromDecoded(dec.enumField4),
      payer: dec.payer,
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<InitializeEvent> {
    const events: InitializeEvent[] = []
    let log = logs.pop()
    if (!log) {
      return
    }
    let currentProgramId: string = ""
    const programStartRe = /Program ([A-z0-9]+) invoke \[[0-9]+\]/
    const ixDataStart = /Program (log|data): (.+)/
    while (log) {
      if (programStartRe.test(log)) {
        currentProgramId = log.match(programStartRe)![1]
      } else if (
        currentProgramId === programId.toString() &&
        ixDataStart.test(log)
      ) {
        try {
          const eventDataStr = log.match(ixDataStart)![2]
          const event = InitializeEvent.decode(
            Buffer.from(base64.toByteArray(eventDataStr))
          )
          yield event
        } catch (err) {
          if (errorOnDecodeFailure) {
            throw err
          }
        }
      }
      log = logs.pop()
    }
  }

  static toJSON(data: InitializeEventEvent): InitializeEventEventJSON {
    // convert fields to classes if needed
    const event = {
      boolField: data.boolField,
      u8Field: data.u8Field,
      i8Field: data.i8Field,
      u16Field: data.u16Field,
      i16Field: data.i16Field,
      u32Field: data.u32Field,
      i32Field: data.i32Field,
      f32Field: data.f32Field,
      u64Field: data.u64Field,
      i64Field: data.i64Field,
      f64Field: data.f64Field,
      u128Field: data.u128Field,
      i128Field: data.i128Field,
      bytesField: data.bytesField,
      stringField: data.stringField,
      pubkeyField: data.pubkeyField,
      vecField: data.vecField,
      vecStructField: data.vecStructField.map(
        (item) => new types.FooStruct({ ...item })
      ),
      optionField: data.optionField,
      optionStructField:
        (data.optionStructField &&
          new types.FooStruct({ ...data.optionStructField })) ||
        null,
      structField: new types.FooStruct({ ...data.structField }),
      arrayField: data.arrayField,
      enumField1: data.enumField1,
      enumField2: data.enumField2,
      enumField3: data.enumField3,
      enumField4: data.enumField4,
      payer: data.payer,
    }
    return {
      boolField: event.boolField,
      u8Field: event.u8Field,
      i8Field: event.i8Field,
      u16Field: event.u16Field,
      i16Field: event.i16Field,
      u32Field: event.u32Field,
      i32Field: event.i32Field,
      f32Field: event.f32Field,
      u64Field: event.u64Field.toString(),
      i64Field: event.i64Field.toString(),
      f64Field: event.f64Field,
      u128Field: event.u128Field.toString(),
      i128Field: event.i128Field.toString(),
      bytesField: Array.from(event.bytesField.values()),
      stringField: event.stringField,
      pubkeyField: event.pubkeyField.toString(),
      vecField: event.vecField.map((item) => item.toString()),
      vecStructField: event.vecStructField.map((item) => item.toJSON()),
      optionField: event.optionField,
      optionStructField:
        (event.optionStructField && event.optionStructField.toJSON()) || null,
      structField: event.structField.toJSON(),
      arrayField: event.arrayField,
      enumField1: event.enumField1.toJSON(),
      enumField2: event.enumField2.toJSON(),
      enumField3: event.enumField3.toJSON(),
      enumField4: event.enumField4.toJSON(),
      payer: event.payer.toString(),
    }
  }

  toJSON(): InitializeEventEventJSON {
    return InitializeEvent.toJSON(this.data)
  }

  static fromJSON(obj: InitializeEventEventJSON): InitializeEvent {
    return new InitializeEvent({
      boolField: obj.boolField,
      u8Field: obj.u8Field,
      i8Field: obj.i8Field,
      u16Field: obj.u16Field,
      i16Field: obj.i16Field,
      u32Field: obj.u32Field,
      i32Field: obj.i32Field,
      f32Field: obj.f32Field,
      u64Field: BigInt(obj.u64Field),
      i64Field: BigInt(obj.i64Field),
      f64Field: obj.f64Field,
      u128Field: BigInt(obj.u128Field),
      i128Field: BigInt(obj.i128Field),
      bytesField: Uint8Array.from(obj.bytesField),
      stringField: obj.stringField,
      pubkeyField: new PublicKey(obj.pubkeyField),
      vecField: obj.vecField.map((item) => BigInt(item)),
      vecStructField: obj.vecStructField.map((item) =>
        types.FooStruct.fromJSON(item)
      ),
      optionField: obj.optionField,
      optionStructField:
        (obj.optionStructField &&
          types.FooStruct.fromJSON(obj.optionStructField)) ||
        null,
      structField: types.FooStruct.fromJSON(obj.structField),
      arrayField: obj.arrayField,
      enumField1: types.FooEnum.fromJSON(obj.enumField1),
      enumField2: types.FooEnum.fromJSON(obj.enumField2),
      enumField3: types.FooEnum.fromJSON(obj.enumField3),
      enumField4: types.FooEnum.fromJSON(obj.enumField4),
      payer: new PublicKey(obj.payer),
    })
  }
}
