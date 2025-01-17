// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
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
  readonly data: CounterAccount

  static readonly discriminator = Buffer.from([
    255, 176, 4, 245, 188, 253, 124, 25,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("authority"),
    borsh.u64("count"),
  ])

  constructor(accountData: CounterAccount) {
    this.data = {
      authority: accountData.authority,
      count: accountData.count,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(Counter.discriminator)
  }

  static decode(data: Buffer): Counter {
    if (!Counter.isDiscriminatorEqual(data)) {
      throw new Error("Invalid account discriminator.")
    }

    const dec = Counter.layout.decode(data.subarray(8))

    return new Counter({
      authority: dec.authority,
      count: dec.count,
    })
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig
  ): Promise<Counter | null> {
    const info = await c.getAccountInfo(address, getAccountInfoConfig)
    if (info === null) {
      return null
    }
    if (!info.owner.equals(programId)) {
      throw new Error("Account doesn't belong to this program.")
    }
    return this.decode(info.data)
  }

  static async fetchNonNullable(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig,
    notFoundError: Error = new Error("Account with address not found.")
  ): Promise<Counter> {
    const account = await Counter.fetch(
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

  static async fetchNullableData(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig,
    notFoundError: Error = new Error("Account with address not found.")
  ): Promise<CounterAccount | null> {
    return await Counter.fetchNonNullable(
      c,
      address,
      programId,
      getAccountInfoConfig,
      notFoundError
    ).then((a) => a?.data)
  }

  static async fetchNonNullableData(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig,
    notFoundError: Error = new Error("Account with address not found.")
  ): Promise<CounterAccount> {
    return await Counter.fetchNonNullable(
      c,
      address,
      programId,
      getAccountInfoConfig,
      notFoundError
    ).then((a) => a.data)
  }

  static toJSON(data: CounterAccount): CounterAccountJSON {
    // convert fields to classes if needed
    const account = {
      authority: data.authority,
      count: data.count,
    }
    return {
      authority: account.authority.toString(),
      count: account.count.toString(),
    }
  }

  toJSON(): CounterAccountJSON {
    return Counter.toJSON(this.data)
  }

  static fromJSON(obj: CounterAccountJSON): Counter {
    return new Counter({
      authority: new PublicKey(obj.authority),
      count: BigInt(obj.count),
    })
  }
}
