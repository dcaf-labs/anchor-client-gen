// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface NoDataAccount {
  data: number
}

export interface NoDataAccountJSON {
  data: number
}

export class NoData {
  readonly data: NoDataAccount

  static readonly discriminator = Buffer.from([
    143, 170, 242, 179, 177, 24, 0, 94,
  ])

  static readonly layout = borsh.struct([borsh.u8("data")])

  constructor(accountData: NoDataAccount) {
    this.data = {
      data: accountData.data,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(NoData.discriminator)
  }

  static decode(data: Buffer): NoData {
    if (!NoData.isDiscriminatorEqual(data)) {
      throw new Error("Invalid account discriminator.")
    }

    const dec = NoData.layout.decode(data.subarray(8))

    return new NoData({
      data: dec.data,
    })
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig
  ): Promise<NoData | null> {
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
  ): Promise<NoData> {
    const account = await NoData.fetch(
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
  ): Promise<NoDataAccount | null> {
    return await NoData.fetchNonNullable(
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
  ): Promise<NoDataAccount> {
    return await NoData.fetchNonNullable(
      c,
      address,
      programId,
      getAccountInfoConfig,
      notFoundError
    ).then((a) => a.data)
  }

  static toJSON(data: NoDataAccount): NoDataAccountJSON {
    // convert fields to classes if needed
    const account = {
      data: data.data,
    }
    return {
      data: account.data,
    }
  }

  toJSON(): NoDataAccountJSON {
    return NoData.toJSON(this.data)
  }

  static fromJSON(obj: NoDataAccountJSON): NoData {
    return new NoData({
      data: obj.data,
    })
  }
}
