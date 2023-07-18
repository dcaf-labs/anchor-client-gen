// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"
import { PROGRAM_ID } from "../programId"

export interface InitializeAccounts {
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

export interface InitializeAccountsJSON {
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

export class Initialize {
  static readonly ixName = "initialize"
  readonly identifier: Buffer
  readonly keys: Array<AccountMeta>

  constructor(
    readonly accounts: InitializeAccounts,
    readonly programId: PublicKey = PROGRAM_ID
  ) {
    this.identifier = Buffer.from([175, 175, 109, 31, 13, 152, 155, 237])
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
  }

  static fromDecoded(flattenedAccounts: PublicKey[]) {
    const accounts = {
      state: flattenedAccounts[0],
      nested: {
        clock: flattenedAccounts[1],
        rent: flattenedAccounts[2],
      },
      payer: flattenedAccounts[3],
      systemProgram: flattenedAccounts[4],
    }
    return new Initialize(accounts)
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

  toAccountsJSON(): InitializeAccountsJSON {
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
