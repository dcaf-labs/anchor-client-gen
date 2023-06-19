// This file was automatically generated. DO NOT MODIFY DIRECTLY.
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"
// InitializeWithValues2Fields are raw anchor decoded values
export interface InitializeWithValues2Fields {
  vecOfOption: Array<bigint | null>
}
// InitializeWithValues2Args convert properties to type classes if available. This is used for converting to JSON
export interface InitializeWithValues2Args {
  vecOfOption: Array<bigint | null>
}

export interface InitializeWithValues2FieldsJSON {
  vecOfOption: Array<string | null>
}

export interface InitializeWithValues2Accounts {
  state: PublicKey
  payer: PublicKey
  systemProgram: PublicKey
}

export interface InitializeWithValues2AccountsJSON {
  state: string
  payer: string
  systemProgram: string
}

const layout = borsh.struct([
  borsh.vec(borsh.option(borsh.u64()), "vecOfOption"),
])

/**
 * a separate instruction due to initialize_with_values having too many arguments
 * https://github.com/solana-labs/solana/issues/23978
 */
export class InitializeWithValues2 {
  static readonly ixName = "initializeWithValues2"
  readonly identifier: Buffer
  readonly keys: Array<AccountMeta>
  readonly args: InitializeWithValues2Args

  constructor(
    readonly fields: InitializeWithValues2Fields,
    readonly accounts: InitializeWithValues2Accounts,
    readonly programId: PublicKey = PROGRAM_ID
  ) {
    this.identifier = Buffer.from([248, 190, 21, 97, 239, 148, 39, 181])
    this.keys = [
      { pubkey: this.accounts.state, isSigner: true, isWritable: true },
      { pubkey: this.accounts.payer, isSigner: true, isWritable: true },
      {
        pubkey: this.accounts.systemProgram,
        isSigner: false,
        isWritable: false,
      },
    ]
    this.args = {
      vecOfOption: fields.vecOfOption,
    }
  }

  static fromDecoded(
    fields: InitializeWithValues2Fields,
    flattenedAccounts: PublicKey[]
  ) {
    const accounts = {
      state: flattenedAccounts[0],
      payer: flattenedAccounts[1],
      systemProgram: flattenedAccounts[2],
    }
    return new InitializeWithValues2(fields, accounts)
  }

  build() {
    const buffer = Buffer.alloc(1000)
    const len = layout.encode(
      {
        vecOfOption: this.fields.vecOfOption.map(
          (item) => (item && new BN(item.toString())) || null
        ),
      },
      buffer
    )
    const data = Buffer.concat([this.identifier, buffer]).slice(0, 8 + len)
    const ix = new TransactionInstruction({
      keys: this.keys,
      programId: this.programId,
      data,
    })
    return ix
  }

  toArgsJSON(): InitializeWithValues2FieldsJSON {
    return {
      vecOfOption: this.args.vecOfOption.map(
        (item) => (item && item.toString()) || null
      ),
    }
  }

  toAccountsJSON(): InitializeWithValues2AccountsJSON {
    return {
      state: this.accounts.state.toString(),
      payer: this.accounts.payer.toString(),
      systemProgram: this.accounts.systemProgram.toString(),
    }
  }
}
