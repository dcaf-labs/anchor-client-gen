// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface InitVaultArgs {
  params: types.InitializeVaultParamsFields
}

export interface InitVaultArgsJSON {
  params: types.InitializeVaultParamsJSON
}

export interface InitVaultAccounts {
  creator: PublicKey
  vault: PublicKey
  vaultProtoConfig: PublicKey
  tokenAAccount: PublicKey
  tokenBAccount: PublicKey
  treasuryTokenBAccount: PublicKey
  tokenAMint: PublicKey
  tokenBMint: PublicKey
  tokenProgram: PublicKey
  associatedTokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
}

export interface InitVaultAccountsJSON {
  creator: string
  vault: string
  vaultProtoConfig: string
  tokenAAccount: string
  tokenBAccount: string
  treasuryTokenBAccount: string
  tokenAMint: string
  tokenBMint: string
  tokenProgram: string
  associatedTokenProgram: string
  systemProgram: string
  rent: string
}

export interface InitVaultInstruction {
  args: InitVaultArgs
  accounts: InitVaultAccounts
}

export interface InitVaultInstructionJSON {
  args: InitVaultArgsJSON
  accounts: InitVaultAccountsJSON
}

const layout = borsh.struct([types.InitializeVaultParams.layout("params")])

export class InitVault {
  static readonly ixName = "initVault"
  readonly ixName = InitVault.ixName
  static readonly identifier: Buffer = Buffer.from([
    77, 79, 85, 150, 33, 217, 52, 106,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: InitVaultInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(InitVault.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    args: InitVaultArgs,
    flattenedAccounts: PublicKey[]
  ): InitVault {
    const accounts = {
      creator: flattenedAccounts[0],
      vault: flattenedAccounts[1],
      vaultProtoConfig: flattenedAccounts[2],
      tokenAAccount: flattenedAccounts[3],
      tokenBAccount: flattenedAccounts[4],
      treasuryTokenBAccount: flattenedAccounts[5],
      tokenAMint: flattenedAccounts[6],
      tokenBMint: flattenedAccounts[7],
      tokenProgram: flattenedAccounts[8],
      associatedTokenProgram: flattenedAccounts[9],
      systemProgram: flattenedAccounts[10],
      rent: flattenedAccounts[11],
    }
    return new InitVault(programId, { args, accounts })
  }

  static decode(
    programId: PublicKey,
    ixData: Uint8Array,
    flattenedAccounts: PublicKey[]
  ): InitVault {
    return InitVault.fromDecoded(
      programId,
      layout.decode(ixData, InitVault.identifier.length),
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
        pubkey: this.instructionData.accounts.vault,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.vaultProtoConfig,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.tokenAAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.tokenBAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.treasuryTokenBAccount,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.tokenAMint,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.tokenBMint,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.tokenProgram,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.associatedTokenProgram,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.systemProgram,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.rent,
        isSigner: false,
        isWritable: false,
      },
    ]
  }

  build() {
    const buffer = Buffer.alloc(1000)
    const len = layout.encode(
      {
        params: types.InitializeVaultParams.toEncodable(
          this.instructionData.args.params
        ),
      },
      buffer
    )
    const data = Buffer.concat([InitVault.identifier, buffer]).slice(0, 8 + len)
    const ix = new TransactionInstruction({
      keys: this.toAccountMetas(),
      programId: this.programId,
      data,
    })
    return ix
  }

  toArgsJSON(): InitVaultArgsJSON {
    const args = {
      params: new types.InitializeVaultParams({
        ...this.instructionData.args.params,
      }),
    }
    return {
      params: args.params.toJSON(),
    }
  }

  toAccountsJSON(): InitVaultAccountsJSON {
    return {
      creator: this.instructionData.accounts.creator.toString(),
      vault: this.instructionData.accounts.vault.toString(),
      vaultProtoConfig:
        this.instructionData.accounts.vaultProtoConfig.toString(),
      tokenAAccount: this.instructionData.accounts.tokenAAccount.toString(),
      tokenBAccount: this.instructionData.accounts.tokenBAccount.toString(),
      treasuryTokenBAccount:
        this.instructionData.accounts.treasuryTokenBAccount.toString(),
      tokenAMint: this.instructionData.accounts.tokenAMint.toString(),
      tokenBMint: this.instructionData.accounts.tokenBMint.toString(),
      tokenProgram: this.instructionData.accounts.tokenProgram.toString(),
      associatedTokenProgram:
        this.instructionData.accounts.associatedTokenProgram.toString(),
      systemProgram: this.instructionData.accounts.systemProgram.toString(),
      rent: this.instructionData.accounts.rent.toString(),
    }
  }

  toJSON(): InitVaultInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
