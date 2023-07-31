// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface PositionAccount {
  vault: PublicKey
  positionAuthority: PublicKey
  referrer: PublicKey
  depositedTokenAAmount: bigint
  withdrawnTokenBAmount: bigint
  depositTimestamp: bigint
  dripPeriodIdBeforeDeposit: bigint
  numberOfSwaps: bigint
  periodicDripAmount: bigint
  isClosed: boolean
  bump: number
}

export interface PositionAccountJSON {
  vault: string
  positionAuthority: string
  referrer: string
  depositedTokenAAmount: string
  withdrawnTokenBAmount: string
  depositTimestamp: string
  dripPeriodIdBeforeDeposit: string
  numberOfSwaps: string
  periodicDripAmount: string
  isClosed: boolean
  bump: number
}

export class Position {
  readonly data: PositionAccount

  static readonly discriminator = Buffer.from([
    170, 188, 143, 228, 122, 64, 247, 208,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("vault"),
    borsh.publicKey("positionAuthority"),
    borsh.publicKey("referrer"),
    borsh.u64("depositedTokenAAmount"),
    borsh.u64("withdrawnTokenBAmount"),
    borsh.i64("depositTimestamp"),
    borsh.u64("dripPeriodIdBeforeDeposit"),
    borsh.u64("numberOfSwaps"),
    borsh.u64("periodicDripAmount"),
    borsh.bool("isClosed"),
    borsh.u8("bump"),
  ])

  constructor(accountData: PositionAccount) {
    this.data = {
      vault: accountData.vault,
      positionAuthority: accountData.positionAuthority,
      referrer: accountData.referrer,
      depositedTokenAAmount: accountData.depositedTokenAAmount,
      withdrawnTokenBAmount: accountData.withdrawnTokenBAmount,
      depositTimestamp: accountData.depositTimestamp,
      dripPeriodIdBeforeDeposit: accountData.dripPeriodIdBeforeDeposit,
      numberOfSwaps: accountData.numberOfSwaps,
      periodicDripAmount: accountData.periodicDripAmount,
      isClosed: accountData.isClosed,
      bump: accountData.bump,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(Position.discriminator)
  }

  static decode(data: Buffer): Position {
    if (!Position.isDiscriminatorEqual(data)) {
      throw new Error("Invalid account discriminator.")
    }

    const dec = Position.layout.decode(data.subarray(8))

    return new Position({
      vault: dec.vault,
      positionAuthority: dec.positionAuthority,
      referrer: dec.referrer,
      depositedTokenAAmount: dec.depositedTokenAAmount,
      withdrawnTokenBAmount: dec.withdrawnTokenBAmount,
      depositTimestamp: dec.depositTimestamp,
      dripPeriodIdBeforeDeposit: dec.dripPeriodIdBeforeDeposit,
      numberOfSwaps: dec.numberOfSwaps,
      periodicDripAmount: dec.periodicDripAmount,
      isClosed: dec.isClosed,
      bump: dec.bump,
    })
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig
  ): Promise<Position | null> {
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
  ): Promise<Position> {
    const account = await Position.fetch(
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
  ): Promise<PositionAccount | null> {
    return await Position.fetchNonNullable(
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
  ): Promise<PositionAccount> {
    return await Position.fetchNonNullable(
      c,
      address,
      programId,
      getAccountInfoConfig,
      notFoundError
    ).then((a) => a.data)
  }

  static toJSON(data: PositionAccount): PositionAccountJSON {
    // convert fields to classes if needed
    const account = {
      vault: data.vault,
      positionAuthority: data.positionAuthority,
      referrer: data.referrer,
      depositedTokenAAmount: data.depositedTokenAAmount,
      withdrawnTokenBAmount: data.withdrawnTokenBAmount,
      depositTimestamp: data.depositTimestamp,
      dripPeriodIdBeforeDeposit: data.dripPeriodIdBeforeDeposit,
      numberOfSwaps: data.numberOfSwaps,
      periodicDripAmount: data.periodicDripAmount,
      isClosed: data.isClosed,
      bump: data.bump,
    }
    return {
      vault: account.vault.toString(),
      positionAuthority: account.positionAuthority.toString(),
      referrer: account.referrer.toString(),
      depositedTokenAAmount: account.depositedTokenAAmount.toString(),
      withdrawnTokenBAmount: account.withdrawnTokenBAmount.toString(),
      depositTimestamp: account.depositTimestamp.toString(),
      dripPeriodIdBeforeDeposit: account.dripPeriodIdBeforeDeposit.toString(),
      numberOfSwaps: account.numberOfSwaps.toString(),
      periodicDripAmount: account.periodicDripAmount.toString(),
      isClosed: account.isClosed,
      bump: account.bump,
    }
  }

  toJSON(): PositionAccountJSON {
    return Position.toJSON(this.data)
  }

  static fromJSON(obj: PositionAccountJSON): Position {
    return new Position({
      vault: new PublicKey(obj.vault),
      positionAuthority: new PublicKey(obj.positionAuthority),
      referrer: new PublicKey(obj.referrer),
      depositedTokenAAmount: BigInt(obj.depositedTokenAAmount),
      withdrawnTokenBAmount: BigInt(obj.withdrawnTokenBAmount),
      depositTimestamp: BigInt(obj.depositTimestamp),
      dripPeriodIdBeforeDeposit: BigInt(obj.dripPeriodIdBeforeDeposit),
      numberOfSwaps: BigInt(obj.numberOfSwaps),
      periodicDripAmount: BigInt(obj.periodicDripAmount),
      isClosed: obj.isClosed,
      bump: obj.bump,
    })
  }
}
