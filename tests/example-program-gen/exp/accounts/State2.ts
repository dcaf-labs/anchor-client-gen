// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface State2Account {
  vecOfOption: Array<bigint | null>
}

export interface State2AccountJSON {
  vecOfOption: Array<string | null>
}

export class State2 {
  readonly data: State2Account

  static readonly discriminator = Buffer.from([
    106, 97, 255, 161, 250, 205, 185, 192,
  ])

  static readonly layout = borsh.struct([
    borsh.vec(borsh.option(borsh.u64()), "vecOfOption"),
  ])

  constructor(accountData: State2Account) {
    this.data = {
      vecOfOption: accountData.vecOfOption,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(State2.discriminator)
  }

  static decode(data: Buffer): State2 {
    if (!State2.isDiscriminatorEqual(data)) {
      throw new Error("Invalid account discriminator.")
    }

    const dec = State2.layout.decode(data.subarray(8))

    return new State2({
      vecOfOption: dec.vecOfOption,
    })
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig
  ): Promise<State2 | null> {
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
  ): Promise<State2> {
    const account = await State2.fetch(
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
  ): Promise<State2Account | null> {
    return await State2.fetchNonNullable(
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
  ): Promise<State2Account> {
    return await State2.fetchNonNullable(
      c,
      address,
      programId,
      getAccountInfoConfig,
      notFoundError
    ).then((a) => a.data)
  }

  static toJSON(data: State2Account): State2AccountJSON {
    // convert fields to classes if needed
    const account = {
      vecOfOption: data.vecOfOption,
    }
    return {
      vecOfOption: account.vecOfOption.map(
        (item) => (item && item.toString()) || null
      ),
    }
  }

  toJSON(): State2AccountJSON {
    return State2.toJSON(this.data)
  }

  static fromJSON(obj: State2AccountJSON): State2 {
    return new State2({
      vecOfOption: obj.vecOfOption.map(
        (item) => (item && BigInt(item)) || null
      ),
    })
  }
}
