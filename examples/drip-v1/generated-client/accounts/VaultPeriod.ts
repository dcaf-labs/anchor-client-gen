// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface VaultPeriodAccount {
  vault: PublicKey
  periodId: bigint
  dar: bigint
  twap: bigint
  dripTimestamp: bigint
  bump: number
}

export interface VaultPeriodAccountJSON {
  vault: string
  periodId: string
  dar: string
  twap: string
  dripTimestamp: string
  bump: number
}

export class VaultPeriod {
  readonly data: VaultPeriodAccount

  static readonly discriminator = Buffer.from([
    224, 196, 159, 18, 79, 227, 22, 122,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("vault"),
    borsh.u64("periodId"),
    borsh.u64("dar"),
    borsh.u128("twap"),
    borsh.i64("dripTimestamp"),
    borsh.u8("bump"),
  ])

  constructor(accountData: VaultPeriodAccount) {
    this.data = {
      vault: accountData.vault,
      periodId: accountData.periodId,
      dar: accountData.dar,
      twap: accountData.twap,
      dripTimestamp: accountData.dripTimestamp,
      bump: accountData.bump,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(VaultPeriod.discriminator)
  }

  static decode(data: Buffer): VaultPeriod {
    if (!VaultPeriod.isDiscriminatorEqual(data)) {
      throw new Error("Invalid account discriminator.")
    }

    const dec = VaultPeriod.layout.decode(data.subarray(8))

    return new VaultPeriod({
      vault: dec.vault,
      periodId: dec.periodId,
      dar: dec.dar,
      twap: dec.twap,
      dripTimestamp: dec.dripTimestamp,
      bump: dec.bump,
    })
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig
  ): Promise<VaultPeriod | null> {
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
  ): Promise<VaultPeriod> {
    const account = await VaultPeriod.fetch(
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
  ): Promise<VaultPeriodAccount | null> {
    return await VaultPeriod.fetchNonNullable(
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
  ): Promise<VaultPeriodAccount> {
    return await VaultPeriod.fetchNonNullable(
      c,
      address,
      programId,
      getAccountInfoConfig,
      notFoundError
    ).then((a) => a.data)
  }

  static toJSON(data: VaultPeriodAccount): VaultPeriodAccountJSON {
    // convert fields to classes if needed
    const account = {
      vault: data.vault,
      periodId: data.periodId,
      dar: data.dar,
      twap: data.twap,
      dripTimestamp: data.dripTimestamp,
      bump: data.bump,
    }
    return {
      vault: account.vault.toString(),
      periodId: account.periodId.toString(),
      dar: account.dar.toString(),
      twap: account.twap.toString(),
      dripTimestamp: account.dripTimestamp.toString(),
      bump: account.bump,
    }
  }

  toJSON(): VaultPeriodAccountJSON {
    return VaultPeriod.toJSON(this.data)
  }

  static fromJSON(obj: VaultPeriodAccountJSON): VaultPeriod {
    return new VaultPeriod({
      vault: new PublicKey(obj.vault),
      periodId: BigInt(obj.periodId),
      dar: BigInt(obj.dar),
      twap: BigInt(obj.twap),
      dripTimestamp: BigInt(obj.dripTimestamp),
      bump: obj.bump,
    })
  }
}
