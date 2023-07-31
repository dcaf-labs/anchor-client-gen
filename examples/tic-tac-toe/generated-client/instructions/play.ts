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

  constructor(
    readonly programId: PublicKey,
    readonly instructionData: PlayInstruction
  ) {}

  static isIdentifierEqual(ixData: Buffer): boolean {
    return ixData.subarray(0, 8).equals(Play.identifier)
  }

  static fromDecoded(
    programId: PublicKey,
    args: PlayArgs,
    flattenedAccounts: PublicKey[]
  ): Play {
    const accounts = {
      game: flattenedAccounts[0],
      player: flattenedAccounts[1],
    }
    return new Play(programId, { args, accounts })
  }

  static decode(
    programId: PublicKey,
    ixData: Uint8Array,
    flattenedAccounts: PublicKey[]
  ): Play {
    return Play.fromDecoded(
      programId,
      layout.decode(ixData, Play.identifier.length),
      flattenedAccounts
    )
  }

  toAccountMetas(): AccountMeta[] {
    return [
      {
        pubkey: this.instructionData.accounts.game,
        isSigner: false,
        isWritable: true,
      },
      {
        pubkey: this.instructionData.accounts.player,
        isSigner: true,
        isWritable: false,
      },
    ]
  }

  build() {
    const buffer = Buffer.alloc(1000)
    const len = layout.encode(
      {
        tile: types.Tile.toEncodable(this.instructionData.args.tile),
      },
      buffer
    )
    const data = Buffer.concat([Play.identifier, buffer]).slice(0, 8 + len)
    const ix = new TransactionInstruction({
      keys: this.toAccountMetas(),
      programId: this.programId,
      data,
    })
    return ix
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
