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
  static readonly identifier: Buffer = Buffer.from([
    248, 190, 21, 97, 239, 148, 39, 181,
  ])

  constructor(readonly instructionData: InitializeWithValues2Instruction) {}

  static fromDecoded(
    args: InitializeWithValues2Args,
    flattenedAccounts: PublicKey[]
  ): InitializeWithValues2 {
    const accounts = {
      state: flattenedAccounts[0],
      payer: flattenedAccounts[1],
      systemProgram: flattenedAccounts[2],
    }
    return new InitializeWithValues2({ args, accounts })
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
