// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface SetupGameArgs {
  playerTwo: PublicKey
}

export interface SetupGameArgsJSON {
  playerTwo: string
}

export interface SetupGameAccounts {
  game: PublicKey
  playerOne: PublicKey
  systemProgram: PublicKey
}

export interface SetupGameAccountsJSON {
  game: string
  playerOne: string
  systemProgram: string
}

export interface SetupGameInstruction {
  args: SetupGameArgs
  accounts: SetupGameAccounts
}

export interface SetupGameInstructionJSON {
  args: SetupGameArgsJSON
  accounts: SetupGameAccountsJSON
}

const layout = borsh.struct([borsh.publicKey("playerTwo")])

export class SetupGame {
  static readonly ixName = "setupGame"
  static readonly identifier: Buffer = Buffer.from([
    180, 218, 128, 75, 58, 222, 35, 82,
  ])

  constructor(readonly instructionData: SetupGameInstruction) {}

  static fromDecoded(
    args: SetupGameArgs,
    flattenedAccounts: PublicKey[]
  ): SetupGame {
    const accounts = {
      game: flattenedAccounts[0],
      playerOne: flattenedAccounts[1],
      systemProgram: flattenedAccounts[2],
    }
    return new SetupGame({ args, accounts })
  }

  toArgsJSON(): SetupGameArgsJSON {
    const args = {
      playerTwo: this.instructionData.args.playerTwo,
    }
    return {
      playerTwo: args.playerTwo.toString(),
    }
  }

  toAccountsJSON(): SetupGameAccountsJSON {
    return {
      game: this.instructionData.accounts.game.toString(),
      playerOne: this.instructionData.accounts.playerOne.toString(),
      systemProgram: this.instructionData.accounts.systemProgram.toString(),
    }
  }

  toJSON(): SetupGameInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
