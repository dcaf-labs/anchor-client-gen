// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"
// PlayFields are raw anchor decoded values
export interface PlayFields {
  tile: types.TileFields
}
// PlayArgs convert properties to type classes if available. This is used for converting to JSON
export interface PlayArgs {
  tile: types.Tile
}

export interface PlayFieldsJSON {
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

const layout = borsh.struct([types.Tile.layout("tile")])

export class Play {
  static readonly ixName = "play"
  readonly identifier: Buffer
  readonly keys: Array<AccountMeta>
  readonly args: PlayArgs

  constructor(readonly fields: PlayFields, readonly accounts: PlayAccounts) {
    this.identifier = Buffer.from([213, 157, 193, 142, 228, 56, 248, 150])
    this.keys = [
      { pubkey: this.accounts.game, isSigner: false, isWritable: true },
      { pubkey: this.accounts.player, isSigner: true, isWritable: false },
    ]
    this.args = {
      tile: new types.Tile({ ...fields.tile }),
    }
  }

  static fromDecoded(fields: PlayFields, flattenedAccounts: PublicKey[]) {
    const accounts = {
      game: flattenedAccounts[0],
      player: flattenedAccounts[1],
    }
    return new Play(fields, accounts)
  }

  toArgsJSON(): PlayFieldsJSON {
    return {
      tile: this.args.tile.toJSON(),
    }
  }

  toAccountsJSON(): PlayAccountsJSON {
    return {
      game: this.accounts.game.toString(),
      player: this.accounts.player.toString(),
    }
  }
}
