// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

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

export interface InitializeInstruction {
  args: null
  accounts: InitializeAccounts
}

export interface InitializeInstructionJSON {
  args: null
  accounts: InitializeAccountsJSON
}

export class Initialize {
  static readonly ixName = "initialize"
  static readonly identifier: Buffer = Buffer.from([
    175, 175, 109, 31, 13, 152, 155, 237,
  ])

  constructor(readonly instructionData: InitializeInstruction) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(Initialize.identifier)
  }

  static fromDecoded(flattenedAccounts: PublicKey[]): Initialize {
    const accounts = {
      state: flattenedAccounts[0],
      nested: {
        clock: flattenedAccounts[1],
        rent: flattenedAccounts[2],
      },
      payer: flattenedAccounts[3],
      systemProgram: flattenedAccounts[4],
    }
    return new Initialize({ args: null, accounts })
  }

  toArgsJSON(): null {
    return null
  }

  toAccountsJSON(): InitializeAccountsJSON {
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

  toJSON(): InitializeInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
