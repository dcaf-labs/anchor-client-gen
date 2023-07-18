// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface State2Account {
  vecOfOption: Array<bigint | null>
}

export interface State2AccountJSON {
  vecOfOption: Array<string | null>
}

export class State2 {
  readonly vecOfOption: Array<bigint | null>

  static readonly discriminator = Buffer.from([
    106, 97, 255, 161, 250, 205, 185, 192,
  ])

  static readonly layout = borsh.struct([
    borsh.vec(borsh.option(borsh.u64()), "vecOfOption"),
  ])

  constructor(fields: State2Account) {
    this.vecOfOption = fields.vecOfOption
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey
  ): Promise<State2 | null> {
    const info = await c.getAccountInfo(address)

    if (info === null) {
      return null
    }
    if (!info.owner.equals(programId)) {
      throw new Error("account doesn't belong to this program")
    }

    return this.decode(info.data)
  }

  static decode(data: Buffer): State2 {
    if (!data.subarray(0, 8).equals(State2.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = State2.layout.decode(data.subarray(8))

    return new State2({
      vecOfOption: dec.vecOfOption,
    })
  }

  toJSON(): State2AccountJSON {
    return {
      vecOfOption: this.vecOfOption.map(
        (item) => (item && item.toString()) || null
      ),
    }
  }

  static fromJSON(obj: State2AccountJSON): State2 {
    return new State2({
      vecOfOption: obj.vecOfOption.map(
        (item) => (item && BigInt(item)) || null
      ),
    })
  }
}
