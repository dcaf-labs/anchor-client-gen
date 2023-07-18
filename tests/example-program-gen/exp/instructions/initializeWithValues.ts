// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"
import { PROGRAM_ID } from "../programId"
// InitializeWithValuesFields are raw anchor decoded values
export interface InitializeWithValuesFields {
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
// InitializeWithValuesArgs convert properties to type classes if available. This is used for converting to JSON
export interface InitializeWithValuesArgs {
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
  vecStructField: Array<types.FooStruct>
  optionField: boolean | null
  optionStructField: types.FooStruct | null
  structField: types.FooStruct
  arrayField: Array<boolean>
  enumField1: types.FooEnumKind
  enumField2: types.FooEnumKind
  enumField3: types.FooEnumKind
  enumField4: types.FooEnumKind
}

export interface InitializeWithValuesFieldsJSON {
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

export interface InitializeWithValuesAccounts {
  /** State account */
  state: PublicKey
  nested: {
    /** Sysvar clock */
    clock: PublicKey
    rent: PublicKey
  }
  payer: PublicKey
  systemProgram: PublicKey
}

export interface InitializeWithValuesAccountsJSON {
  /** State account */
  state: string
  nested: {
    /** Sysvar clock */
    clock: string
    rent: string
  }
  payer: string
  systemProgram: string
}

const layout = borsh.struct([
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

/** Initializes an account with specified values */
export class InitializeWithValues {
  static readonly ixName = "initializeWithValues"
  readonly identifier: Buffer
  readonly keys: Array<AccountMeta>
  readonly args: InitializeWithValuesArgs

  constructor(
    readonly fields: InitializeWithValuesFields,
    readonly accounts: InitializeWithValuesAccounts,
    readonly programId: PublicKey = PROGRAM_ID
  ) {
    this.identifier = Buffer.from([220, 73, 8, 213, 178, 69, 181, 141])
    this.keys = [
      { pubkey: this.accounts.state, isSigner: true, isWritable: true },
      {
        pubkey: this.accounts.nested.clock,
        isSigner: false,
        isWritable: false,
      },
      { pubkey: this.accounts.nested.rent, isSigner: false, isWritable: false },
      { pubkey: this.accounts.payer, isSigner: true, isWritable: true },
      {
        pubkey: this.accounts.systemProgram,
        isSigner: false,
        isWritable: false,
      },
    ]
    this.args = {
      boolField: fields.boolField,
      u8Field: fields.u8Field,
      i8Field: fields.i8Field,
      u16Field: fields.u16Field,
      i16Field: fields.i16Field,
      u32Field: fields.u32Field,
      i32Field: fields.i32Field,
      f32Field: fields.f32Field,
      u64Field: fields.u64Field,
      i64Field: fields.i64Field,
      f64Field: fields.f64Field,
      u128Field: fields.u128Field,
      i128Field: fields.i128Field,
      bytesField: fields.bytesField,
      stringField: fields.stringField,
      pubkeyField: fields.pubkeyField,
      vecField: fields.vecField,
      vecStructField: fields.vecStructField.map(
        (item) => new types.FooStruct({ ...item })
      ),
      optionField: fields.optionField,
      optionStructField:
        (fields.optionStructField &&
          new types.FooStruct({ ...fields.optionStructField })) ||
        null,
      structField: new types.FooStruct({ ...fields.structField }),
      arrayField: fields.arrayField,
      enumField1: fields.enumField1,
      enumField2: fields.enumField2,
      enumField3: fields.enumField3,
      enumField4: fields.enumField4,
    }
  }

  static fromDecoded(
    fields: InitializeWithValuesFields,
    flattenedAccounts: PublicKey[]
  ) {
    const accounts = {
      state: flattenedAccounts[0],
      nested: {
        clock: flattenedAccounts[1],
        rent: flattenedAccounts[2],
      },
      payer: flattenedAccounts[3],
      systemProgram: flattenedAccounts[4],
    }
    return new InitializeWithValues(fields, accounts)
  }

  toArgsJSON(): InitializeWithValuesFieldsJSON {
    return {
      boolField: this.args.boolField,
      u8Field: this.args.u8Field,
      i8Field: this.args.i8Field,
      u16Field: this.args.u16Field,
      i16Field: this.args.i16Field,
      u32Field: this.args.u32Field,
      i32Field: this.args.i32Field,
      f32Field: this.args.f32Field,
      u64Field: this.args.u64Field.toString(),
      i64Field: this.args.i64Field.toString(),
      f64Field: this.args.f64Field,
      u128Field: this.args.u128Field.toString(),
      i128Field: this.args.i128Field.toString(),
      bytesField: Array.from(this.args.bytesField.values()),
      stringField: this.args.stringField,
      pubkeyField: this.args.pubkeyField.toString(),
      vecField: this.args.vecField.map((item) => item.toString()),
      vecStructField: this.args.vecStructField.map((item) => item.toJSON()),
      optionField: this.args.optionField,
      optionStructField:
        (this.args.optionStructField && this.args.optionStructField.toJSON()) ||
        null,
      structField: this.args.structField.toJSON(),
      arrayField: this.args.arrayField,
      enumField1: this.args.enumField1.toJSON(),
      enumField2: this.args.enumField2.toJSON(),
      enumField3: this.args.enumField3.toJSON(),
      enumField4: this.args.enumField4.toJSON(),
    }
  }

  toAccountsJSON(): InitializeWithValuesAccountsJSON {
    return {
      state: this.accounts.state.toString(),
      nested: {
        clock: this.accounts.nested.clock.toString(),
        rent: this.accounts.nested.rent.toString(),
      },
      payer: this.accounts.payer.toString(),
      systemProgram: this.accounts.systemProgram.toString(),
    }
  }
}
