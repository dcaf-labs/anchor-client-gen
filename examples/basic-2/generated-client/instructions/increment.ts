// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"

export interface IncrementAccounts {
  counter: PublicKey
  authority: PublicKey
}

export interface IncrementAccountsJSON {
  counter: string
  authority: string
}

export interface IncrementInstruction {
  args: null
  accounts: IncrementAccounts
}

export interface IncrementInstructionJSON {
  args: null
  accounts: IncrementAccountsJSON
}

export class Increment {
  static readonly ixName = "increment"
  readonly ixName = Increment.ixName
  static readonly identifier: Buffer = Buffer.from([
    11, 18, 104, 9, 104, 174, 59, 33,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: IncrementInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(Increment.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): Increment {
    const accounts = {
      counter: flattenedAccounts[0],
      authority: flattenedAccounts[1],
    }
    return new Increment(programId, { args: null, accounts })
  }

  static decode(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): Increment {
    return Increment.fromDecoded(programId, flattenedAccounts)
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.counter,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.authority,
        isSigner: true,
        isWritable: false,
      },
    ]
  }

  build() {
    const data = Increment.identifier
    const ix = new TransactionInstruction({
      keys: this.toAccountMetas(),
      programId: this.programId,
      data,
    })
    return ix
  }

  toArgsJSON(): null {
    return null
  }

  toAccountsJSON(): IncrementAccountsJSON {
    return {
      counter: this.instructionData.accounts.counter.toString(),
      authority: this.instructionData.accounts.authority.toString(),
    }
  }

  toJSON(): IncrementInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
