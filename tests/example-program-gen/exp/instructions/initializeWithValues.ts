// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

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

export interface InitializeWithValuesArgsJSON {
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

export interface InitializeWithValuesInstruction {
  args: InitializeWithValuesArgs
  accounts: InitializeWithValuesAccounts
}

export interface InitializeWithValuesInstructionJSON {
  args: InitializeWithValuesArgsJSON
  accounts: InitializeWithValuesAccountsJSON
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
  readonly ixName = InitializeWithValues.ixName
  static readonly identifier: Buffer = Buffer.from([
    220, 73, 8, 213, 178, 69, 181, 141,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: InitializeWithValuesInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(InitializeWithValues.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    args: InitializeWithValuesArgs,
    flattenedAccounts: PublicKey[]
  ): InitializeWithValues {
    const accounts = {
      state: flattenedAccounts[0],
      nested: {
        clock: flattenedAccounts[1],
        rent: flattenedAccounts[2],
      },
      payer: flattenedAccounts[3],
      systemProgram: flattenedAccounts[4],
    }
    return new InitializeWithValues(programId, { args, accounts })
  }

  static decode(
    programId: PublicKey,
    ixData: Uint8Array,
    flattenedAccounts: PublicKey[]
  ): InitializeWithValues {
    return InitializeWithValues.fromDecoded(
      programId,
      layout.decode(ixData, InitializeWithValues.identifier.length),
      flattenedAccounts
    )
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.state,
        isSigner: true,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.nested.clock,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.nested.rent,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.payer,
        isSigner: true,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.systemProgram,
        isSigner: false,
        isWritable: false,
      },
    ]
  }

  build() {
    const buffer = Buffer.alloc(1000)
    const len = layout.encode(
      {
        boolField: this.instructionData.args.boolField,
        u8Field: this.instructionData.args.u8Field,
        i8Field: this.instructionData.args.i8Field,
        u16Field: this.instructionData.args.u16Field,
        i16Field: this.instructionData.args.i16Field,
        u32Field: this.instructionData.args.u32Field,
        i32Field: this.instructionData.args.i32Field,
        f32Field: this.instructionData.args.f32Field,
        u64Field: new BN(this.instructionData.args.u64Field.toString()),
        i64Field: new BN(this.instructionData.args.i64Field.toString()),
        f64Field: this.instructionData.args.f64Field,
        u128Field: new BN(this.instructionData.args.u128Field.toString()),
        i128Field: new BN(this.instructionData.args.i128Field.toString()),
        bytesField: Buffer.from(
          this.instructionData.args.bytesField.buffer,
          this.instructionData.args.bytesField.byteOffset,
          this.instructionData.args.bytesField.length
        ),
        stringField: this.instructionData.args.stringField,
        pubkeyField: this.instructionData.args.pubkeyField,
        vecField: this.instructionData.args.vecField.map(
          (item) => new BN(item.toString())
        ),
        vecStructField: this.instructionData.args.vecStructField.map((item) =>
          types.FooStruct.toEncodable(item)
        ),
        optionField: this.instructionData.args.optionField,
        optionStructField:
          (this.instructionData.args.optionStructField &&
            types.FooStruct.toEncodable(
              this.instructionData.args.optionStructField
            )) ||
          null,
        structField: types.FooStruct.toEncodable(
          this.instructionData.args.structField
        ),
        arrayField: this.instructionData.args.arrayField,
        enumField1: this.instructionData.args.enumField1.toEncodable(),
        enumField2: this.instructionData.args.enumField2.toEncodable(),
        enumField3: this.instructionData.args.enumField3.toEncodable(),
        enumField4: this.instructionData.args.enumField4.toEncodable(),
      },
      buffer
    )
    const data = Buffer.concat([InitializeWithValues.identifier, buffer]).slice(
      0,
      8 + len
    )
    const ix = new TransactionInstruction({
      keys: this.toAccountMetas(),
      programId: this.programId,
      data,
    })
    return ix
  }

  toArgsJSON(): InitializeWithValuesArgsJSON {
    const args = {
      boolField: this.instructionData.args.boolField,
      u8Field: this.instructionData.args.u8Field,
      i8Field: this.instructionData.args.i8Field,
      u16Field: this.instructionData.args.u16Field,
      i16Field: this.instructionData.args.i16Field,
      u32Field: this.instructionData.args.u32Field,
      i32Field: this.instructionData.args.i32Field,
      f32Field: this.instructionData.args.f32Field,
      u64Field: this.instructionData.args.u64Field,
      i64Field: this.instructionData.args.i64Field,
      f64Field: this.instructionData.args.f64Field,
      u128Field: this.instructionData.args.u128Field,
      i128Field: this.instructionData.args.i128Field,
      bytesField: this.instructionData.args.bytesField,
      stringField: this.instructionData.args.stringField,
      pubkeyField: this.instructionData.args.pubkeyField,
      vecField: this.instructionData.args.vecField,
      vecStructField: this.instructionData.args.vecStructField.map(
        (item) => new types.FooStruct({ ...item })
      ),
      optionField: this.instructionData.args.optionField,
      optionStructField:
        (this.instructionData.args.optionStructField &&
          new types.FooStruct({
            ...this.instructionData.args.optionStructField,
          })) ||
        null,
      structField: new types.FooStruct({
        ...this.instructionData.args.structField,
      }),
      arrayField: this.instructionData.args.arrayField,
      enumField1: this.instructionData.args.enumField1,
      enumField2: this.instructionData.args.enumField2,
      enumField3: this.instructionData.args.enumField3,
      enumField4: this.instructionData.args.enumField4,
    }
    return {
      boolField: args.boolField,
      u8Field: args.u8Field,
      i8Field: args.i8Field,
      u16Field: args.u16Field,
      i16Field: args.i16Field,
      u32Field: args.u32Field,
      i32Field: args.i32Field,
      f32Field: args.f32Field,
      u64Field: args.u64Field.toString(),
      i64Field: args.i64Field.toString(),
      f64Field: args.f64Field,
      u128Field: args.u128Field.toString(),
      i128Field: args.i128Field.toString(),
      bytesField: Array.from(args.bytesField.values()),
      stringField: args.stringField,
      pubkeyField: args.pubkeyField.toString(),
      vecField: args.vecField.map((item) => item.toString()),
      vecStructField: args.vecStructField.map((item) => item.toJSON()),
      optionField: args.optionField,
      optionStructField:
        (args.optionStructField && args.optionStructField.toJSON()) || null,
      structField: args.structField.toJSON(),
      arrayField: args.arrayField,
      enumField1: args.enumField1.toJSON(),
      enumField2: args.enumField2.toJSON(),
      enumField3: args.enumField3.toJSON(),
      enumField4: args.enumField4.toJSON(),
    }
  }

  toAccountsJSON(): InitializeWithValuesAccountsJSON {
    return {
      state: this.instructionData.accounts.state.toString(),
      nested: {
        clock: this.instructionData.accounts.nested.clock.toString(),
        rent: this.instructionData.accounts.nested.rent.toString(),
      },
      payer: this.instructionData.accounts.payer.toString(),
      systemProgram: this.instructionData.accounts.systemProgram.toString(),
    }
  }

  toJSON(): InitializeWithValuesInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
