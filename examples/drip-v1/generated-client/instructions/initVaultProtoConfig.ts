// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface InitVaultProtoConfigArgs {
  params: types.InitializeVaultProtoConfigParamsFields
}

export interface InitVaultProtoConfigArgsJSON {
  params: types.InitializeVaultProtoConfigParamsJSON
}

export interface InitVaultProtoConfigAccounts {
  creator: PublicKey
  vaultProtoConfig: PublicKey
  systemProgram: PublicKey
}

export interface InitVaultProtoConfigAccountsJSON {
  creator: string
  vaultProtoConfig: string
  systemProgram: string
}

export interface InitVaultProtoConfigInstruction {
  args: InitVaultProtoConfigArgs
  accounts: InitVaultProtoConfigAccounts
}

export interface InitVaultProtoConfigInstructionJSON {
  args: InitVaultProtoConfigArgsJSON
  accounts: InitVaultProtoConfigAccountsJSON
}

const layout = borsh.struct([
  types.InitializeVaultProtoConfigParams.layout("params"),
])

export class InitVaultProtoConfig {
  static readonly ixName = "initVaultProtoConfig"
  readonly ixName = InitVaultProtoConfig.ixName
  static readonly identifier: Buffer = Buffer.from([
    195, 96, 99, 29, 46, 21, 146, 219,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: InitVaultProtoConfigInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(InitVaultProtoConfig.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    args: InitVaultProtoConfigArgs,
    flattenedAccounts: PublicKey[]
  ): InitVaultProtoConfig {
    const accounts = {
      creator: flattenedAccounts[0],
      vaultProtoConfig: flattenedAccounts[1],
      systemProgram: flattenedAccounts[2],
    }
    return new InitVaultProtoConfig(programId, { args, accounts })
  }

  static decode(
    programId: PublicKey,
    ixData: Uint8Array,
    flattenedAccounts: PublicKey[]
  ): InitVaultProtoConfig {
    return InitVaultProtoConfig.fromDecoded(
      programId,
      layout.decode(ixData, InitVaultProtoConfig.identifier.length),
      flattenedAccounts
    )
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.creator,
        isSigner: true,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.vaultProtoConfig,
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
        params: types.InitializeVaultProtoConfigParams.toEncodable(
          this.instructionData.args.params
        ),
      },
      buffer
    )
    const data = Buffer.concat([InitVaultProtoConfig.identifier, buffer]).slice(
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

  toArgsJSON(): InitVaultProtoConfigArgsJSON {
    const args = {
      params: new types.InitializeVaultProtoConfigParams({
        ...this.instructionData.args.params,
      }),
    }
    return {
      params: args.params.toJSON(),
    }
  }

  toAccountsJSON(): InitVaultProtoConfigAccountsJSON {
    return {
      creator: this.instructionData.accounts.creator.toString(),
      vaultProtoConfig:
        this.instructionData.accounts.vaultProtoConfig.toString(),
      systemProgram: this.instructionData.accounts.systemProgram.toString(),
    }
  }

  toJSON(): InitVaultProtoConfigInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
