// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface StateAccount {
  /** A boolean field */
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
}

export interface StateAccountJSON {
  /** A boolean field */
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
}

/** An account containing various fields */
export class State {
  /** A boolean field */
  readonly boolField: boolean
  readonly u8Field: number
  readonly i8Field: number
  readonly u16Field: number
  readonly i16Field: number
  readonly u32Field: number
  readonly i32Field: number
  readonly f32Field: number
  readonly u64Field: bigint
  readonly i64Field: bigint
  readonly f64Field: number
  readonly u128Field: bigint
  readonly i128Field: bigint
  readonly bytesField: Uint8Array
  readonly stringField: string
  readonly pubkeyField: PublicKey
  readonly vecField: Array<bigint>
  readonly vecStructField: Array<types.FooStruct>
  readonly optionField: boolean | null
  readonly optionStructField: types.FooStruct | null
  readonly structField: types.FooStruct
  readonly arrayField: Array<boolean>
  readonly enumField1: types.FooEnumKind
  readonly enumField2: types.FooEnumKind
  readonly enumField3: types.FooEnumKind
  readonly enumField4: types.FooEnumKind

  static readonly discriminator = Buffer.from([
    216, 146, 107, 94, 104, 75, 182, 177,
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
  ])

  constructor(accountData: StateAccount) {
    this.boolField = accountData.boolField
    this.u8Field = accountData.u8Field
    this.i8Field = accountData.i8Field
    this.u16Field = accountData.u16Field
    this.i16Field = accountData.i16Field
    this.u32Field = accountData.u32Field
    this.i32Field = accountData.i32Field
    this.f32Field = accountData.f32Field
    this.u64Field = accountData.u64Field
    this.i64Field = accountData.i64Field
    this.f64Field = accountData.f64Field
    this.u128Field = accountData.u128Field
    this.i128Field = accountData.i128Field
    this.bytesField = accountData.bytesField
    this.stringField = accountData.stringField
    this.pubkeyField = accountData.pubkeyField
    this.vecField = accountData.vecField
    this.vecStructField = accountData.vecStructField.map(
      (item) => new types.FooStruct({ ...item })
    )
    this.optionField = accountData.optionField
    this.optionStructField =
      (accountData.optionStructField &&
        new types.FooStruct({ ...accountData.optionStructField })) ||
      null
    this.structField = new types.FooStruct({ ...accountData.structField })
    this.arrayField = accountData.arrayField
    this.enumField1 = accountData.enumField1
    this.enumField2 = accountData.enumField2
    this.enumField3 = accountData.enumField3
    this.enumField4 = accountData.enumField4
  }

  static decode(data: Buffer): State {
    if (!data.subarray(0, 8).equals(State.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = State.layout.decode(data.subarray(8))

    return new State({
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
      vecStructField: dec.vecStructField.map(
        (
          item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
        ) => types.FooStruct.fromDecoded(item)
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
    })
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig
  ): Promise<State | null> {
    const info = await c.getAccountInfo(address, getAccountInfoConfig)
    if (info === null) {
      return null
    }
    if (!info.owner.equals(programId)) {
      throw new Error("account doesn't belong to this program")
    }
    return this.decode(info.data)
  }

  static async fetchNonNullable(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig,
    notFoundError: Error = new Error("Account with address not found")
  ): Promise<State> {
    const account = await State.fetch(
      c,
      address,
      programId,
      getAccountInfoConfig
    )
    if (!account) {
      throw notFoundError
    }
    return account
  }

  toJSON(): StateAccountJSON {
    return {
      boolField: this.boolField,
      u8Field: this.u8Field,
      i8Field: this.i8Field,
      u16Field: this.u16Field,
      i16Field: this.i16Field,
      u32Field: this.u32Field,
      i32Field: this.i32Field,
      f32Field: this.f32Field,
      u64Field: this.u64Field.toString(),
      i64Field: this.i64Field.toString(),
      f64Field: this.f64Field,
      u128Field: this.u128Field.toString(),
      i128Field: this.i128Field.toString(),
      bytesField: Array.from(this.bytesField.values()),
      stringField: this.stringField,
      pubkeyField: this.pubkeyField.toString(),
      vecField: this.vecField.map((item) => item.toString()),
      vecStructField: this.vecStructField.map((item) => item.toJSON()),
      optionField: this.optionField,
      optionStructField:
        (this.optionStructField && this.optionStructField.toJSON()) || null,
      structField: this.structField.toJSON(),
      arrayField: this.arrayField,
      enumField1: this.enumField1.toJSON(),
      enumField2: this.enumField2.toJSON(),
      enumField3: this.enumField3.toJSON(),
      enumField4: this.enumField4.toJSON(),
    }
  }

  static fromJSON(obj: StateAccountJSON): State {
    return new State({
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
    })
  }
}
