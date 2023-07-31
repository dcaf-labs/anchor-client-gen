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
  readonly ixName = Initialize.ixName
  static readonly identifier: Buffer = Buffer.from([
    175, 175, 109, 31, 13, 152, 155, 237,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: InitializeInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(Initialize.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): Initialize {
    const accounts = {
      state: flattenedAccounts[0],
      nested: {
        clock: flattenedAccounts[1],
        rent: flattenedAccounts[2],
      },
      payer: flattenedAccounts[3],
      systemProgram: flattenedAccounts[4],
    }
    return new Initialize(programId, { args: null, accounts })
  }

  static decode(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): Initialize {
    return Initialize.fromDecoded(programId, flattenedAccounts)
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
    const data = Initialize.identifier
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
