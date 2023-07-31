// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface DepositArgs {
  params: types.DepositParamsFields
}

export interface DepositArgsJSON {
  params: types.DepositParamsJSON
}

export interface DepositAccounts {
  common: {
    depositor: PublicKey
    vault: PublicKey
    vaultPeriodEnd: PublicKey
    vaultTokenAAccount: PublicKey
    userTokenAAccount: PublicKey
    userPosition: PublicKey
    userPositionNftMint: PublicKey
    userPositionNftAccount: PublicKey
    referrer: PublicKey
    tokenProgram: PublicKey
    associatedTokenProgram: PublicKey
    rent: PublicKey
    systemProgram: PublicKey
  }
}

export interface DepositAccountsJSON {
  common: {
    depositor: string
    vault: string
    vaultPeriodEnd: string
    vaultTokenAAccount: string
    userTokenAAccount: string
    userPosition: string
    userPositionNftMint: string
    userPositionNftAccount: string
    referrer: string
    tokenProgram: string
    associatedTokenProgram: string
    rent: string
    systemProgram: string
  }
}

export interface DepositInstruction {
  args: DepositArgs
  accounts: DepositAccounts
}

export interface DepositInstructionJSON {
  args: DepositArgsJSON
  accounts: DepositAccountsJSON
}

const layout = borsh.struct([types.DepositParams.layout("params")])

export class Deposit {
  static readonly ixName = "deposit"
  static readonly identifier: Buffer = Buffer.from([
    242, 35, 198, 137, 82, 225, 242, 182,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: DepositInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(Deposit.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    args: DepositArgs,
    flattenedAccounts: PublicKey[]
  ): Deposit {
    const accounts = {
      common: {
        depositor: flattenedAccounts[0],
        vault: flattenedAccounts[1],
        vaultPeriodEnd: flattenedAccounts[2],
        vaultTokenAAccount: flattenedAccounts[3],
        userTokenAAccount: flattenedAccounts[4],
        userPosition: flattenedAccounts[5],
        userPositionNftMint: flattenedAccounts[6],
        userPositionNftAccount: flattenedAccounts[7],
        referrer: flattenedAccounts[8],
        tokenProgram: flattenedAccounts[9],
        associatedTokenProgram: flattenedAccounts[10],
        rent: flattenedAccounts[11],
        systemProgram: flattenedAccounts[12],
      },
    }
    return new Deposit(programId, { args, accounts })
  }

  static decode(
    programId: PublicKey,
    ixData: Uint8Array,
    flattenedAccounts: PublicKey[]
  ): Deposit {
    return Deposit.fromDecoded(
      programId,
      layout.decode(ixData, Deposit.identifier.length),
      flattenedAccounts
    )
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.common.depositor,
        isSigner: true,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.vault,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.vaultPeriodEnd,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.vaultTokenAAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.userTokenAAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.userPosition,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.userPositionNftMint,
        isSigner: true,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.userPositionNftAccount,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.common.referrer,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.common.tokenProgram,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.common.associatedTokenProgram,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.common.rent,
        isSigner: false,
        isWritable: false,
      },
      {
        pubkey: this.instructionData.accounts.common.systemProgram,
        isSigner: false,
        isWritable: false,
      },
    ]
  }

  build() {
    const buffer = Buffer.alloc(1000)
    const len = layout.encode(
      {
        params: types.DepositParams.toEncodable(
          this.instructionData.args.params
        ),
      },
      buffer
    )
    const data = Buffer.concat([Deposit.identifier, buffer]).slice(0, 8 + len)
    const ix = new TransactionInstruction({
      keys: this.toAccountMetas(),
      programId: this.programId,
      data,
    })
    return ix
  }

  toArgsJSON(): DepositArgsJSON {
    const args = {
      params: new types.DepositParams({ ...this.instructionData.args.params }),
    }
    return {
      params: args.params.toJSON(),
    }
  }

  toAccountsJSON(): DepositAccountsJSON {
    return {
      common: {
        depositor: this.instructionData.accounts.common.depositor.toString(),
        vault: this.instructionData.accounts.common.vault.toString(),
        vaultPeriodEnd:
          this.instructionData.accounts.common.vaultPeriodEnd.toString(),
        vaultTokenAAccount:
          this.instructionData.accounts.common.vaultTokenAAccount.toString(),
        userTokenAAccount:
          this.instructionData.accounts.common.userTokenAAccount.toString(),
        userPosition:
          this.instructionData.accounts.common.userPosition.toString(),
        userPositionNftMint:
          this.instructionData.accounts.common.userPositionNftMint.toString(),
        userPositionNftAccount:
          this.instructionData.accounts.common.userPositionNftAccount.toString(),
        referrer: this.instructionData.accounts.common.referrer.toString(),
        tokenProgram:
          this.instructionData.accounts.common.tokenProgram.toString(),
        associatedTokenProgram:
          this.instructionData.accounts.common.associatedTokenProgram.toString(),
        rent: this.instructionData.accounts.common.rent.toString(),
        systemProgram:
          this.instructionData.accounts.common.systemProgram.toString(),
      },
    }
  }

  toJSON(): DepositInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
