// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface WithdrawAAccounts {
  admin: PublicKey
  vault: PublicKey
  vaultTokenAAccount: PublicKey
  adminTokenAAccount: PublicKey
  vaultProtoConfig: PublicKey
  tokenProgram: PublicKey
}

export interface WithdrawAAccountsJSON {
  admin: string
  vault: string
  vaultTokenAAccount: string
  adminTokenAAccount: string
  vaultProtoConfig: string
  tokenProgram: string
}

export interface WithdrawAInstruction {
  args: null
  accounts: WithdrawAAccounts
}

export interface WithdrawAInstructionJSON {
  args: null
  accounts: WithdrawAAccountsJSON
}

export class WithdrawA {
  static readonly ixName = "withdrawA"
  static readonly identifier: Buffer = Buffer.from([
    120, 193, 241, 208, 58, 216, 211, 99,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: WithdrawAInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(WithdrawA.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): WithdrawA {
    const accounts = {
      admin: flattenedAccounts[0],
      vault: flattenedAccounts[1],
      vaultTokenAAccount: flattenedAccounts[2],
      adminTokenAAccount: flattenedAccounts[3],
      vaultProtoConfig: flattenedAccounts[4],
      tokenProgram: flattenedAccounts[5],
    }
    return new WithdrawA(programId, { args: null, accounts })
  }

  static decode(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): WithdrawA {
    return WithdrawA.fromDecoded(programId, flattenedAccounts)
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.admin,
        isSigner: true,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.vault,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.vaultTokenAAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.adminTokenAAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.vaultProtoConfig,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.tokenProgram,
        isSigner: false,
        isWritable: false,
      },
    ]
  }

  build() {
    const data = WithdrawA.identifier
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

  toAccountsJSON(): WithdrawAAccountsJSON {
    return {
      admin: this.instructionData.accounts.admin.toString(),
      vault: this.instructionData.accounts.vault.toString(),
      vaultTokenAAccount:
        this.instructionData.accounts.vaultTokenAAccount.toString(),
      adminTokenAAccount:
        this.instructionData.accounts.adminTokenAAccount.toString(),
      vaultProtoConfig:
        this.instructionData.accounts.vaultProtoConfig.toString(),
      tokenProgram: this.instructionData.accounts.tokenProgram.toString(),
    }
  }

  toJSON(): WithdrawAInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
