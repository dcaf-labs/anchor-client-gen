// This file was automatically generated. DO NOT MODIFY DIRECTLY.
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface IncrementAccounts {
  counter: PublicKey
  authority: PublicKey
}

export interface IncrementAccountsJSON {
  counter: string
  authority: string
}

export class Increment {
  static readonly ixName = "increment"
  readonly identifier: Buffer
  readonly keys: Array<AccountMeta>

  constructor(
    readonly accounts: IncrementAccounts,
    readonly programId: PublicKey = PROGRAM_ID
  ) {
    this.identifier = Buffer.from([11, 18, 104, 9, 104, 174, 59, 33])
    this.keys = [
      { pubkey: this.accounts.counter, isSigner: false, isWritable: true },
      { pubkey: this.accounts.authority, isSigner: true, isWritable: false },
    ]
  }

  static fromDecoded(flattenedAccounts: PublicKey[]) {
    const accounts = {
      counter: flattenedAccounts[0],
      authority: flattenedAccounts[1],
    }
    return new Increment(accounts)
  }

  build() {
    const data = this.identifier
    const ix = new TransactionInstruction({
      keys: this.keys,
      programId: this.programId,
      data,
    })
    return ix
  }

  toAccountsJSON(): IncrementAccountsJSON {
    return {
      counter: this.accounts.counter.toString(),
      authority: this.accounts.authority.toString(),
    }
  }
}
