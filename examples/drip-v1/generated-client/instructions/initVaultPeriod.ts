// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface InitVaultPeriodArgs {
  params: types.InitializeVaultPeriodParamsFields
}

export interface InitVaultPeriodArgsJSON {
  params: types.InitializeVaultPeriodParamsJSON
}

export interface InitVaultPeriodAccounts {
  vaultPeriod: PublicKey
  vault: PublicKey
  creator: PublicKey
  systemProgram: PublicKey
}

export interface InitVaultPeriodAccountsJSON {
  vaultPeriod: string
  vault: string
  creator: string
  systemProgram: string
}

export interface InitVaultPeriodInstruction {
  args: InitVaultPeriodArgs
  accounts: InitVaultPeriodAccounts
}

export interface InitVaultPeriodInstructionJSON {
  args: InitVaultPeriodArgsJSON
  accounts: InitVaultPeriodAccountsJSON
}

const layout = borsh.struct([
  types.InitializeVaultPeriodParams.layout("params"),
])

export class InitVaultPeriod {
  static readonly ixName = "initVaultPeriod"
  readonly ixName = InitVaultPeriod.ixName
  static readonly identifier: Buffer = Buffer.from([
    46, 103, 251, 142, 95, 43, 55, 27,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: InitVaultPeriodInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(InitVaultPeriod.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    args: InitVaultPeriodArgs,
    flattenedAccounts: PublicKey[]
  ): InitVaultPeriod {
    const accounts = {
      vaultPeriod: flattenedAccounts[0],
      vault: flattenedAccounts[1],
      creator: flattenedAccounts[2],
      systemProgram: flattenedAccounts[3],
    }
    return new InitVaultPeriod(programId, { args, accounts })
  }

  static decode(
    programId: PublicKey,
    ixData: Uint8Array,
    flattenedAccounts: PublicKey[]
  ): InitVaultPeriod {
    return InitVaultPeriod.fromDecoded(
      programId,
      layout.decode(ixData, InitVaultPeriod.identifier.length),
      flattenedAccounts
    )
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.vaultPeriod,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.vault,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.creator,
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
    const buffer = Buffer.alloc(1000)
    const len = layout.encode(
      {
        params: types.InitializeVaultPeriodParams.toEncodable(
          this.instructionData.args.params
        ),
      },
      buffer
    )
    const data = Buffer.concat([InitVaultPeriod.identifier, buffer]).slice(
      0,
      8 + len
    )
    const ix = new TransactionInstruction({
      keys: this.toAccountMetas(),
      programId: this.programId,
      data,
    })
    return ix
  }

  toArgsJSON(): InitVaultPeriodArgsJSON {
    const args = {
      params: new types.InitializeVaultPeriodParams({
        ...this.instructionData.args.params,
      }),
    }
    return {
      params: args.params.toJSON(),
    }
  }

  toAccountsJSON(): InitVaultPeriodAccountsJSON {
    return {
      vaultPeriod: this.instructionData.accounts.vaultPeriod.toString(),
      vault: this.instructionData.accounts.vault.toString(),
      creator: this.instructionData.accounts.creator.toString(),
      systemProgram: this.instructionData.accounts.systemProgram.toString(),
    }
  }

  toJSON(): InitVaultPeriodInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
