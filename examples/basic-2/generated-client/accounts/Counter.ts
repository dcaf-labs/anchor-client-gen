// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"

export interface CounterAccount {
  authority: PublicKey
  count: bigint
}

export interface CounterAccountJSON {
  authority: string
  count: string
}

export class Counter {
  readonly authority: PublicKey
  readonly count: bigint

  static readonly discriminator = Buffer.from([
    255, 176, 4, 245, 188, 253, 124, 25,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("authority"),
    borsh.u64("count"),
  ])

  constructor(fields: CounterAccount) {
    this.authority = fields.authority
    this.count = fields.count
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey
  ): Promise<Counter | null> {
    const info = await c.getAccountInfo(address)

    if (info === null) {
      return null
    }
    if (!info.owner.equals(programId)) {
      throw new Error("account doesn't belong to this program")
    }

    return this.decode(info.data)
  }

  static decode(data: Buffer): Counter {
    if (!data.subarray(0, 8).equals(Counter.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = Counter.layout.decode(data.subarray(8))

    return new Counter({
      authority: dec.authority,
      count: dec.count,
    })
  }

  toJSON(): CounterAccountJSON {
    return {
      authority: this.authority.toString(),
      count: this.count.toString(),
    }
  }

  static fromJSON(obj: CounterAccountJSON): Counter {
    return new Counter({
      authority: new PublicKey(obj.authority),
      count: BigInt(obj.count),
    })
  }
}
