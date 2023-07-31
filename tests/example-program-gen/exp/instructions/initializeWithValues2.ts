// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface InitializeWithValues2Args {
  vecOfOption: Array<bigint | null>
}

export interface InitializeWithValues2ArgsJSON {
  vecOfOption: Array<string | null>
}

export interface InitializeWithValues2Accounts {
  state: PublicKey
  payer: PublicKey
  systemProgram: PublicKey
}

export interface InitializeWithValues2AccountsJSON {
  state: string
  payer: string
  systemProgram: string
}

export interface InitializeWithValues2Instruction {
  args: InitializeWithValues2Args
  accounts: InitializeWithValues2Accounts
}

export interface InitializeWithValues2InstructionJSON {
  args: InitializeWithValues2ArgsJSON
  accounts: InitializeWithValues2AccountsJSON
}

const layout = borsh.struct([
  borsh.vec(borsh.option(borsh.u64()), "vecOfOption"),
])

/**
 * a separate instruction due to initialize_with_values having too many arguments
 * https://github.com/solana-labs/solana/issues/23978
 */
export class InitializeWithValues2 {
  static readonly ixName = "initializeWithValues2"
  readonly ixName = InitializeWithValues2.ixName
  static readonly identifier: Buffer = Buffer.from([
    248, 190, 21, 97, 239, 148, 39, 181,
  ])

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: InitializeWithValues2Instruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(InitializeWithValues2.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    args: InitializeWithValues2Args,
    flattenedAccounts: PublicKey[]
  ): InitializeWithValues2 {
    const accounts = {
      state: flattenedAccounts[0],
      payer: flattenedAccounts[1],
      systemProgram: flattenedAccounts[2],
    }
    return new InitializeWithValues2(programId, { args, accounts })
  }

  static decode(
    programId: PublicKey,
    ixData: Uint8Array,
    flattenedAccounts: PublicKey[]
  ): InitializeWithValues2 {
    return InitializeWithValues2.fromDecoded(
      programId,
      layout.decode(ixData, InitializeWithValues2.identifier.length),
      flattenedAccounts
    )
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.state,
        isSigner: true,
        isWritable: true,
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
    const buffer = Buffer.alloc(1000)
    const len = layout.encode(
      {
        vecOfOption: this.instructionData.args.vecOfOption.map(
          (item) => (item && new BN(item.toString())) || null
        ),
      },
      buffer
    )
    const data = Buffer.concat([
      InitializeWithValues2.identifier,
      buffer,
    ]).slice(0, 8 + len)
    const ix = new TransactionInstruction({
      keys: this.toAccountMetas(),
      programId: this.programId,
      data,
    })
    return ix
  }

  toArgsJSON(): InitializeWithValues2ArgsJSON {
    const args = {
      vecOfOption: this.instructionData.args.vecOfOption,
    }
    return {
      vecOfOption: args.vecOfOption.map(
        (item) => (item && item.toString()) || null
      ),
    }
  }

  toAccountsJSON(): InitializeWithValues2AccountsJSON {
    return {
      state: this.instructionData.accounts.state.toString(),
      payer: this.instructionData.accounts.payer.toString(),
      systemProgram: this.instructionData.accounts.systemProgram.toString(),
    }
  }

  toJSON(): InitializeWithValues2InstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
