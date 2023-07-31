// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface WithdrawBAccounts {
  common: {
    withdrawer: PublicKey
    vault: PublicKey
    vaultProtoConfig: PublicKey
    vaultPeriodI: PublicKey
    vaultPeriodJ: PublicKey
    userPosition: PublicKey
    userPositionNftAccount: PublicKey
    vaultTokenBAccount: PublicKey
    vaultTreasuryTokenBAccount: PublicKey
    userTokenBAccount: PublicKey
    referrer: PublicKey
    tokenProgram: PublicKey
  }
}

export interface WithdrawBAccountsJSON {
  common: {
    withdrawer: string
    vault: string
    vaultProtoConfig: string
    vaultPeriodI: string
    vaultPeriodJ: string
    userPosition: string
    userPositionNftAccount: string
    vaultTokenBAccount: string
    vaultTreasuryTokenBAccount: string
    userTokenBAccount: string
    referrer: string
    tokenProgram: string
  }
}

export interface WithdrawBInstruction {
  args: null
  accounts: WithdrawBAccounts
}

export interface WithdrawBInstructionJSON {
  args: null
  accounts: WithdrawBAccountsJSON
}

export class WithdrawB {
  static readonly ixName = "withdrawB"
  readonly ixName = WithdrawB.ixName
  static readonly identifier: Buffer = Buffer.from([
    28, 146, 254, 247, 183, 161, 195, 149,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: WithdrawBInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(WithdrawB.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): WithdrawB {
    const accounts = {
      common: {
        withdrawer: flattenedAccounts[0],
        vault: flattenedAccounts[1],
        vaultProtoConfig: flattenedAccounts[2],
        vaultPeriodI: flattenedAccounts[3],
        vaultPeriodJ: flattenedAccounts[4],
        userPosition: flattenedAccounts[5],
        userPositionNftAccount: flattenedAccounts[6],
        vaultTokenBAccount: flattenedAccounts[7],
        vaultTreasuryTokenBAccount: flattenedAccounts[8],
        userTokenBAccount: flattenedAccounts[9],
        referrer: flattenedAccounts[10],
        tokenProgram: flattenedAccounts[11],
      },
    }
    return new WithdrawB(programId, { args: null, accounts })
  }

  static decode(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): WithdrawB {
    return WithdrawB.fromDecoded(programId, flattenedAccounts)
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.common.withdrawer,
        isSigner: true,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.vault,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.vaultProtoConfig,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.common.vaultPeriodI,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.common.vaultPeriodJ,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.common.userPosition,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.userPositionNftAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.vaultTokenBAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.vaultTreasuryTokenBAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.userTokenBAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.referrer,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.tokenProgram,
        isSigner: false,
        isWritable: false,
      },
    ]
  }

  build() {
    const data = WithdrawB.identifier
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

  toAccountsJSON(): WithdrawBAccountsJSON {
    return {
      common: {
        withdrawer: this.instructionData.accounts.common.withdrawer.toString(),
        vault: this.instructionData.accounts.common.vault.toString(),
        vaultProtoConfig:
          this.instructionData.accounts.common.vaultProtoConfig.toString(),
        vaultPeriodI:
          this.instructionData.accounts.common.vaultPeriodI.toString(),
        vaultPeriodJ:
          this.instructionData.accounts.common.vaultPeriodJ.toString(),
        userPosition:
          this.instructionData.accounts.common.userPosition.toString(),
        userPositionNftAccount:
          this.instructionData.accounts.common.userPositionNftAccount.toString(),
        vaultTokenBAccount:
          this.instructionData.accounts.common.vaultTokenBAccount.toString(),
        vaultTreasuryTokenBAccount:
          this.instructionData.accounts.common.vaultTreasuryTokenBAccount.toString(),
        userTokenBAccount:
          this.instructionData.accounts.common.userTokenBAccount.toString(),
        referrer: this.instructionData.accounts.common.referrer.toString(),
        tokenProgram:
          this.instructionData.accounts.common.tokenProgram.toString(),
      },
    }
  }

  toJSON(): WithdrawBInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
