// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface DripOrcaWhirlpoolAccounts {
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
  whirlpool: PublicKey
  tickArray0: PublicKey
  tickArray1: PublicKey
  tickArray2: PublicKey
  oracle: PublicKey
  whirlpoolProgram: PublicKey
}

export interface DripOrcaWhirlpoolAccountsJSON {
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
  whirlpool: string
  tickArray0: string
  tickArray1: string
  tickArray2: string
  oracle: string
  whirlpoolProgram: string
}

export interface DripOrcaWhirlpoolInstruction {
  args: null
  accounts: DripOrcaWhirlpoolAccounts
}

export interface DripOrcaWhirlpoolInstructionJSON {
  args: null
  accounts: DripOrcaWhirlpoolAccountsJSON
}

export class DripOrcaWhirlpool {
  static readonly ixName = "dripOrcaWhirlpool"
  static readonly identifier: Buffer = Buffer.from([
    31, 217, 180, 147, 224, 40, 53, 88,
  ])

  constructor(readonly instructionData: DripOrcaWhirlpoolInstruction) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(DripOrcaWhirlpool.identifier)
  }

  static fromDecoded(flattenedAccounts: PublicKey[]): DripOrcaWhirlpool {
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
      whirlpool: flattenedAccounts[11],
      tickArray0: flattenedAccounts[12],
      tickArray1: flattenedAccounts[13],
      tickArray2: flattenedAccounts[14],
      oracle: flattenedAccounts[15],
      whirlpoolProgram: flattenedAccounts[16],
    }
    return new DripOrcaWhirlpool({ args: null, accounts })
  }

  static decode(flattenedAccounts: PublicKey[]): DripOrcaWhirlpool {
    return DripOrcaWhirlpool.fromDecoded(flattenedAccounts)
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
        pubkey: this.instructionData.accounts.whirlpool,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.tickArray0,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.tickArray1,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.tickArray2,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.oracle,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.whirlpoolProgram,
        isSigner: false,
        isWritable: false,
      },
    ]
  }

  build(programId: PublicKey) {
    const data = DripOrcaWhirlpool.identifier
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

  toAccountsJSON(): DripOrcaWhirlpoolAccountsJSON {
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
      whirlpool: this.instructionData.accounts.whirlpool.toString(),
      tickArray0: this.instructionData.accounts.tickArray0.toString(),
      tickArray1: this.instructionData.accounts.tickArray1.toString(),
      tickArray2: this.instructionData.accounts.tickArray2.toString(),
      oracle: this.instructionData.accounts.oracle.toString(),
      whirlpoolProgram:
        this.instructionData.accounts.whirlpoolProgram.toString(),
    }
  }

  toJSON(): DripOrcaWhirlpoolInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
