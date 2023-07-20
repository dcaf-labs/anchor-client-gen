// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface CauseErrorInstruction {
  args: null
  accounts: null
}

export interface CauseErrorInstructionJSON {
  args: null
  accounts: null
}

export class CauseError {
  static readonly ixName = "causeError"
  static readonly identifier: Buffer = Buffer.from([
    67, 104, 37, 17, 2, 155, 68, 17,
  ])

  constructor(readonly instructionData: CauseErrorInstruction) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(CauseError.identifier)
  }

  static fromDecoded(): CauseError {
    return new CauseError({ args: null, accounts: null })
  }

  toAccountMetas(): AccountMeta[] {
    return []
  }

  build(programId: PublicKey) {
    const data = CauseError.identifier
    const ix = new TransactionInstruction({
      keys: this.toAccountMetas(),
      programId: programId,
      data,
    })
    return ix
  }

  toArgsJSON(): null {
    return null
  }

  toAccountsJSON(): null {
    return null
  }

  toJSON(): CauseErrorInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
