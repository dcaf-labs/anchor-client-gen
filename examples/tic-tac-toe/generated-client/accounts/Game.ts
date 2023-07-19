// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface GameAccount {
  players: Array<PublicKey>
  turn: number
  board: Array<Array<types.SignKind | null>>
  state: types.GameStateKind
}

export interface GameAccountJSON {
  players: Array<string>
  turn: number
  board: Array<Array<types.SignJSON | null>>
  state: types.GameStateJSON
}

export class Game {
  readonly players: Array<PublicKey>
  readonly turn: number
  readonly board: Array<Array<types.SignKind | null>>
  readonly state: types.GameStateKind

  static readonly discriminator = Buffer.from([
    27, 90, 166, 125, 74, 100, 121, 18,
  ])

  static readonly layout = borsh.struct([
    borsh.array(borsh.publicKey(), 2, "players"),
    borsh.u8("turn"),
    borsh.array(borsh.array(borsh.option(types.Sign.layout()), 3), 3, "board"),
    types.GameState.layout("state"),
  ])

  constructor(accountData: GameAccount) {
    this.players = accountData.players
    this.turn = accountData.turn
    this.board = accountData.board
    this.state = accountData.state
  }

  static decode(data: Buffer): Game {
    if (!data.subarray(0, 8).equals(Game.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = Game.layout.decode(data.subarray(8))

    return new Game({
      players: dec.players,
      turn: dec.turn,
      board: dec.board.map(
        (
          item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
        ) =>
          item.map(
            (
              item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
            ) => (item && types.Sign.fromDecoded(item)) || null
          )
      ),
      state: types.GameState.fromDecoded(dec.state),
    })
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig
  ): Promise<Game | null> {
    const info = await c.getAccountInfo(address, getAccountInfoConfig)
    if (info === null) {
      return null
    }
    if (!info.owner.equals(programId)) {
      throw new Error("account doesn't belong to this program")
    }
    return this.decode(info.data)
  }

  static async fetchNonNullable(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig,
    notFoundError: Error = new Error("Account with address not found")
  ): Promise<Game> {
    const account = await Game.fetch(
      c,
      address,
      programId,
      getAccountInfoConfig
    )
    if (!account) {
      throw notFoundError
    }
    return account
  }

  toJSON(): GameAccountJSON {
    return {
      players: this.players.map((item) => item.toString()),
      turn: this.turn,
      board: this.board.map((item) =>
        item.map((item) => (item && item.toJSON()) || null)
      ),
      state: this.state.toJSON(),
    }
  }

  static fromJSON(obj: GameAccountJSON): Game {
    return new Game({
      players: obj.players.map((item) => new PublicKey(item)),
      turn: obj.turn,
      board: obj.board.map((item) =>
        item.map((item) => (item && types.Sign.fromJSON(item)) || null)
      ),
      state: types.GameState.fromJSON(obj.state),
    })
  }
}
