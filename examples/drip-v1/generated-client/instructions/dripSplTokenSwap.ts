// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface DripSplTokenSwapAccounts {
  common: {
    dripTriggerSource: PublicKey
    vault: PublicKey
    vaultProtoConfig: PublicKey
    lastVaultPeriod: PublicKey
    currentVaultPeriod: PublicKey
    vaultTokenAAccount: PublicKey
    vaultTokenBAccount: PublicKey
    swapTokenAAccount: PublicKey
    swapTokenBAccount: PublicKey
    dripFeeTokenAAccount: PublicKey
    tokenProgram: PublicKey
  }
  swap: PublicKey
  swapTokenMint: PublicKey
  swapFeeAccount: PublicKey
  swapAuthority: PublicKey
  tokenSwapProgram: PublicKey
}

export interface DripSplTokenSwapAccountsJSON {
  common: {
    dripTriggerSource: string
    vault: string
    vaultProtoConfig: string
    lastVaultPeriod: string
    currentVaultPeriod: string
    vaultTokenAAccount: string
    vaultTokenBAccount: string
    swapTokenAAccount: string
    swapTokenBAccount: string
    dripFeeTokenAAccount: string
    tokenProgram: string
  }
  swap: string
  swapTokenMint: string
  swapFeeAccount: string
  swapAuthority: string
  tokenSwapProgram: string
}

export interface DripSplTokenSwapInstruction {
  args: null
  accounts: DripSplTokenSwapAccounts
}

export interface DripSplTokenSwapInstructionJSON {
  args: null
  accounts: DripSplTokenSwapAccountsJSON
}

export class DripSplTokenSwap {
  static readonly ixName = "dripSplTokenSwap"
  static readonly identifier: Buffer = Buffer.from([
    129, 32, 61, 181, 42, 74, 219, 106,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: DripSplTokenSwapInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(DripSplTokenSwap.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): DripSplTokenSwap {
    const accounts = {
      common: {
        dripTriggerSource: flattenedAccounts[0],
        vault: flattenedAccounts[1],
        vaultProtoConfig: flattenedAccounts[2],
        lastVaultPeriod: flattenedAccounts[3],
        currentVaultPeriod: flattenedAccounts[4],
        vaultTokenAAccount: flattenedAccounts[5],
        vaultTokenBAccount: flattenedAccounts[6],
        swapTokenAAccount: flattenedAccounts[7],
        swapTokenBAccount: flattenedAccounts[8],
        dripFeeTokenAAccount: flattenedAccounts[9],
        tokenProgram: flattenedAccounts[10],
      },
      swap: flattenedAccounts[11],
      swapTokenMint: flattenedAccounts[12],
      swapFeeAccount: flattenedAccounts[13],
      swapAuthority: flattenedAccounts[14],
      tokenSwapProgram: flattenedAccounts[15],
    }
    return new DripSplTokenSwap(programId, { args: null, accounts })
  }

  static decode(
    programId: PublicKey,
    flattenedAccounts: PublicKey[]
  ): DripSplTokenSwap {
    return DripSplTokenSwap.fromDecoded(programId, flattenedAccounts)
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.common.dripTriggerSource,
        isSigner: true,
        isWritable: false,
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
        pubkey: this.instructionData.accounts.common.lastVaultPeriod,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.common.currentVaultPeriod,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.vaultTokenAAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.vaultTokenBAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.swapTokenAAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.swapTokenBAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.dripFeeTokenAAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.tokenProgram,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.swap,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.swapTokenMint,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.swapFeeAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.swapAuthority,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.tokenSwapProgram,
        isSigner: false,
        isWritable: false,
      },
    ]
  }

  build() {
    const data = DripSplTokenSwap.identifier
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

  toAccountsJSON(): DripSplTokenSwapAccountsJSON {
    return {
      common: {
        dripTriggerSource:
          this.instructionData.accounts.common.dripTriggerSource.toString(),
        vault: this.instructionData.accounts.common.vault.toString(),
        vaultProtoConfig:
          this.instructionData.accounts.common.vaultProtoConfig.toString(),
        lastVaultPeriod:
          this.instructionData.accounts.common.lastVaultPeriod.toString(),
        currentVaultPeriod:
          this.instructionData.accounts.common.currentVaultPeriod.toString(),
        vaultTokenAAccount:
          this.instructionData.accounts.common.vaultTokenAAccount.toString(),
        vaultTokenBAccount:
          this.instructionData.accounts.common.vaultTokenBAccount.toString(),
        swapTokenAAccount:
          this.instructionData.accounts.common.swapTokenAAccount.toString(),
        swapTokenBAccount:
          this.instructionData.accounts.common.swapTokenBAccount.toString(),
        dripFeeTokenAAccount:
          this.instructionData.accounts.common.dripFeeTokenAAccount.toString(),
        tokenProgram:
          this.instructionData.accounts.common.tokenProgram.toString(),
      },
      swap: this.instructionData.accounts.swap.toString(),
      swapTokenMint: this.instructionData.accounts.swapTokenMint.toString(),
      swapFeeAccount: this.instructionData.accounts.swapFeeAccount.toString(),
      swapAuthority: this.instructionData.accounts.swapAuthority.toString(),
      tokenSwapProgram:
        this.instructionData.accounts.tokenSwapProgram.toString(),
    }
  }

  toJSON(): DripSplTokenSwapInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
