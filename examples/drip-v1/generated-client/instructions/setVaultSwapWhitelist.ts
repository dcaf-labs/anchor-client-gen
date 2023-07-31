// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface SetVaultSwapWhitelistArgs {
  params: types.UpdateVaultWhitelistedSwapsParamsFields
}

export interface SetVaultSwapWhitelistArgsJSON {
  params: types.UpdateVaultWhitelistedSwapsParamsJSON
}

export interface SetVaultSwapWhitelistAccounts {
  admin: PublicKey
  vault: PublicKey
  vaultProtoConfig: PublicKey
}

export interface SetVaultSwapWhitelistAccountsJSON {
  admin: string
  vault: string
  vaultProtoConfig: string
}

export interface SetVaultSwapWhitelistInstruction {
  args: SetVaultSwapWhitelistArgs
  accounts: SetVaultSwapWhitelistAccounts
}

export interface SetVaultSwapWhitelistInstructionJSON {
  args: SetVaultSwapWhitelistArgsJSON
  accounts: SetVaultSwapWhitelistAccountsJSON
}

const layout = borsh.struct([
  types.UpdateVaultWhitelistedSwapsParams.layout("params"),
])

export class SetVaultSwapWhitelist {
  static readonly ixName = "setVaultSwapWhitelist"
  static readonly identifier: Buffer = Buffer.from([
    215, 229, 51, 175, 90, 52, 232, 25,
  ])

  constructor(readonly instructionData: SetVaultSwapWhitelistInstruction) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(SetVaultSwapWhitelist.identifier)
  }

  static fromDecoded(
    args: SetVaultSwapWhitelistArgs,
    flattenedAccounts: PublicKey[]
  ): SetVaultSwapWhitelist {
    const accounts = {
      admin: flattenedAccounts[0],
      vault: flattenedAccounts[1],
      vaultProtoConfig: flattenedAccounts[2],
    }
    return new SetVaultSwapWhitelist({ args, accounts })
  }

  static decode(
    ixData: Uint8Array,
    flattenedAccounts: PublicKey[]
  ): SetVaultSwapWhitelist {
    return SetVaultSwapWhitelist.fromDecoded(
      layout.decode(ixData, SetVaultSwapWhitelist.identifier.length),
      flattenedAccounts
    )
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
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.vaultProtoConfig,
        isSigner: false,
        isWritable: false,
      },
    ]
  }

  build(programId: PublicKey) {
    const buffer = Buffer.alloc(1000)
    const len = layout.encode(
      {
        params: types.UpdateVaultWhitelistedSwapsParams.toEncodable(
          this.instructionData.args.params
        ),
      },
      buffer
    )
    const data = Buffer.concat([
      SetVaultSwapWhitelist.identifier,
      buffer,
    ]).slice(0, 8 + len)
    const ix = new TransactionInstruction({
      keys: this.toAccountMetas(),
      programId: programId,
      data,
    })
    return ix
  }

  toArgsJSON(): SetVaultSwapWhitelistArgsJSON {
    const args = {
      params: new types.UpdateVaultWhitelistedSwapsParams({
        ...this.instructionData.args.params,
      }),
    }
    return {
      params: args.params.toJSON(),
    }
  }

  toAccountsJSON(): SetVaultSwapWhitelistAccountsJSON {
    return {
      admin: this.instructionData.accounts.admin.toString(),
      vault: this.instructionData.accounts.vault.toString(),
      vaultProtoConfig:
        this.instructionData.accounts.vaultProtoConfig.toString(),
    }
  }

  toJSON(): SetVaultSwapWhitelistInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
