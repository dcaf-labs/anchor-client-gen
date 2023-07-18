// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
// CreateFields are raw anchor decoded values
export interface CreateFields {
  authority: PublicKey
}
// CreateArgs convert properties to type classes if available. This is used for converting to JSON
export interface CreateArgs {
  authority: PublicKey
}

export interface CreateFieldsJSON {
  authority: string
}

export interface CreateAccounts {
  counter: PublicKey
  user: PublicKey
  systemProgram: PublicKey
}

export interface CreateAccountsJSON {
  counter: string
  user: string
  systemProgram: string
}

const layout = borsh.struct([borsh.publicKey("authority")])

export class Create {
  static readonly ixName = "create"
  readonly identifier: Buffer
  readonly keys: Array<AccountMeta>
  readonly args: CreateArgs

  constructor(
    readonly fields: CreateFields,
    readonly accounts: CreateAccounts
  ) {
    this.identifier = Buffer.from([24, 30, 200, 40, 5, 28, 7, 119])
    this.keys = [
      { pubkey: this.accounts.counter, isSigner: true, isWritable: true },
      { pubkey: this.accounts.user, isSigner: true, isWritable: true },
      {
        pubkey: this.accounts.systemProgram,
        isSigner: false,
        isWritable: false,
      },
    ]
    this.args = {
      authority: fields.authority,
    }
  }

  static fromDecoded(fields: CreateFields, flattenedAccounts: PublicKey[]) {
    const accounts = {
      counter: flattenedAccounts[0],
      user: flattenedAccounts[1],
      systemProgram: flattenedAccounts[2],
    }
    return new Create(fields, accounts)
  }

  toArgsJSON(): CreateFieldsJSON {
    return {
      authority: this.args.authority.toString(),
    }
  }

  toAccountsJSON(): CreateAccountsJSON {
    return {
      counter: this.accounts.counter.toString(),
      user: this.accounts.user.toString(),
      systemProgram: this.accounts.systemProgram.toString(),
    }
  }
}
