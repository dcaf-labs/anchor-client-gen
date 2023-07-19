// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface PlayArgs {
  tile: types.TileFields
}

export interface PlayArgsJSON {
  tile: types.TileJSON
}

export interface PlayAccounts {
  game: PublicKey
  player: PublicKey
}

export interface PlayAccountsJSON {
  game: string
  player: string
}

export interface PlayInstruction {
  args: PlayArgs
  accounts: PlayAccounts
}

export interface PlayInstructionJSON {
  args: PlayArgsJSON
  accounts: PlayAccountsJSON
}

const layout = borsh.struct([types.Tile.layout("tile")])

export class Play {
  static readonly ixName = "play"
  static readonly identifier: Buffer = Buffer.from([
    213, 157, 193, 142, 228, 56, 248, 150,
  ])

  constructor(readonly instructionData: PlayInstruction) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(Play.identifier)
  }

  static fromDecoded(args: PlayArgs, flattenedAccounts: PublicKey[]): Play {
    const accounts = {
      game: flattenedAccounts[0],
      player: flattenedAccounts[1],
    }
    return new Play({ args, accounts })
  }

  toArgsJSON(): PlayArgsJSON {
    const args = {
      tile: new types.Tile({ ...this.instructionData.args.tile }),
    }
    return {
      tile: args.tile.toJSON(),
    }
  }

  toAccountsJSON(): PlayAccountsJSON {
    return {
      game: this.instructionData.accounts.game.toString(),
      player: this.instructionData.accounts.player.toString(),
    }
  }

  toJSON(): PlayInstructionJSON {
    return { args: this.toArgsJSON(), accounts: this.toAccountsJSON() }
  }
}
