// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface VaultProtoConfigAccount {
  granularity: bigint
  tokenADripTriggerSpread: number
  tokenBWithdrawalSpread: number
  tokenBReferralSpread: number
  admin: PublicKey
}

export interface VaultProtoConfigAccountJSON {
  granularity: string
  tokenADripTriggerSpread: number
  tokenBWithdrawalSpread: number
  tokenBReferralSpread: number
  admin: string
}

export class VaultProtoConfig {
  readonly data: VaultProtoConfigAccount

  static readonly discriminator = Buffer.from([
    173, 22, 36, 165, 190, 3, 142, 199,
  ])

  static readonly layout = borsh.struct([
    borsh.u64("granularity"),
    borsh.u16("tokenADripTriggerSpread"),
    borsh.u16("tokenBWithdrawalSpread"),
    borsh.u16("tokenBReferralSpread"),
    borsh.publicKey("admin"),
  ])

  constructor(accountData: VaultProtoConfigAccount) {
    this.data = {
      granularity: accountData.granularity,
      tokenADripTriggerSpread: accountData.tokenADripTriggerSpread,
      tokenBWithdrawalSpread: accountData.tokenBWithdrawalSpread,
      tokenBReferralSpread: accountData.tokenBReferralSpread,
      admin: accountData.admin,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(VaultProtoConfig.discriminator)
  }

  static decode(data: Buffer): VaultProtoConfig {
    if (!VaultProtoConfig.isDiscriminatorEqual(data)) {
      throw new Error("Invalid account discriminator.")
    }

    const dec = VaultProtoConfig.layout.decode(data.subarray(8))

    return new VaultProtoConfig({
      granularity: dec.granularity,
      tokenADripTriggerSpread: dec.tokenADripTriggerSpread,
      tokenBWithdrawalSpread: dec.tokenBWithdrawalSpread,
      tokenBReferralSpread: dec.tokenBReferralSpread,
      admin: dec.admin,
    })
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig
  ): Promise<VaultProtoConfig | null> {
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
  ): Promise<VaultProtoConfig> {
    const account = await VaultProtoConfig.fetch(
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
  ): Promise<VaultProtoConfigAccount | null> {
    return await VaultProtoConfig.fetchNonNullable(
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
  ): Promise<VaultProtoConfigAccount> {
    return await VaultProtoConfig.fetchNonNullable(
      c,
      address,
      programId,
      getAccountInfoConfig,
      notFoundError
    ).then((a) => a.data)
  }

  static toJSON(data: VaultProtoConfigAccount): VaultProtoConfigAccountJSON {
    // convert fields to classes if needed
    const account = {
      granularity: data.granularity,
      tokenADripTriggerSpread: data.tokenADripTriggerSpread,
      tokenBWithdrawalSpread: data.tokenBWithdrawalSpread,
      tokenBReferralSpread: data.tokenBReferralSpread,
      admin: data.admin,
    }
    return {
      granularity: account.granularity.toString(),
      tokenADripTriggerSpread: account.tokenADripTriggerSpread,
      tokenBWithdrawalSpread: account.tokenBWithdrawalSpread,
      tokenBReferralSpread: account.tokenBReferralSpread,
      admin: account.admin.toString(),
    }
  }

  toJSON(): VaultProtoConfigAccountJSON {
    return VaultProtoConfig.toJSON(this.data)
  }

  static fromJSON(obj: VaultProtoConfigAccountJSON): VaultProtoConfig {
    return new VaultProtoConfig({
      granularity: BigInt(obj.granularity),
      tokenADripTriggerSpread: obj.tokenADripTriggerSpread,
      tokenBWithdrawalSpread: obj.tokenBWithdrawalSpread,
      tokenBReferralSpread: obj.tokenBReferralSpread,
      admin: new PublicKey(obj.admin),
    })
  }
}
