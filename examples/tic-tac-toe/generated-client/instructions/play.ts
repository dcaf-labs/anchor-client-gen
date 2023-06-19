// This file was automatically generated. DO NOT MODIFY DIRECTLY.
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"
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

  constructor(
    readonly fields: PlayFields,
    readonly accounts: PlayAccounts,
    readonly programId: PublicKey = PROGRAM_ID
  ) {
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

  build() {
    const buffer = Buffer.alloc(1000)
    const len = layout.encode(
      {
        tile: types.Tile.toEncodable(this.fields.tile),
      },
      buffer
    )
    const data = Buffer.concat([this.identifier, buffer]).slice(0, 8 + len)
    const ix = new TransactionInstruction({
      keys: this.keys,
      programId: this.programId,
      data,
    })
    return ix
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
