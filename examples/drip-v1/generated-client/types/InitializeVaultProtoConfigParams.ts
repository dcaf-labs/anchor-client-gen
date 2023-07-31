// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey } from "@solana/web3.js"
import BN from "bn.js"
import * as types from "../types"
import * as borsh from "@coral-xyz/borsh"

export interface InitializeVaultProtoConfigParamsFields {
  granularity: bigint
  tokenADripTriggerSpread: number
  tokenBWithdrawalSpread: number
  tokenBReferralSpread: number
  admin: PublicKey
}

export interface InitializeVaultProtoConfigParamsJSON {
  granularity: string
  tokenADripTriggerSpread: number
  tokenBWithdrawalSpread: number
  tokenBReferralSpread: number
  admin: string
}

export class InitializeVaultProtoConfigParams {
  readonly granularity: bigint
  readonly tokenADripTriggerSpread: number
  readonly tokenBWithdrawalSpread: number
  readonly tokenBReferralSpread: number
  readonly admin: PublicKey

  constructor(fields: InitializeVaultProtoConfigParamsFields) {
    this.granularity = fields.granularity
    this.tokenADripTriggerSpread = fields.tokenADripTriggerSpread
    this.tokenBWithdrawalSpread = fields.tokenBWithdrawalSpread
    this.tokenBReferralSpread = fields.tokenBReferralSpread
    this.admin = fields.admin
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.u64("granularity"),
        borsh.u16("tokenADripTriggerSpread"),
        borsh.u16("tokenBWithdrawalSpread"),
        borsh.u16("tokenBReferralSpread"),
        borsh.publicKey("admin"),
      ],
      property
    )
  }

  static fromDecoded(obj: any) {
    return new InitializeVaultProtoConfigParams({
      granularity: obj.granularity,
      tokenADripTriggerSpread: obj.tokenADripTriggerSpread,
      tokenBWithdrawalSpread: obj.tokenBWithdrawalSpread,
      tokenBReferralSpread: obj.tokenBReferralSpread,
      admin: obj.admin,
    })
  }

  static toEncodable(fields: InitializeVaultProtoConfigParamsFields) {
    return {
      granularity: new BN(fields.granularity.toString()),
      tokenADripTriggerSpread: fields.tokenADripTriggerSpread,
      tokenBWithdrawalSpread: fields.tokenBWithdrawalSpread,
      tokenBReferralSpread: fields.tokenBReferralSpread,
      admin: fields.admin,
    }
  }

  toEncodable() {
    return InitializeVaultProtoConfigParams.toEncodable(this)
  }

  toJSON(): InitializeVaultProtoConfigParamsJSON {
    return {
      granularity: this.granularity.toString(),
      tokenADripTriggerSpread: this.tokenADripTriggerSpread,
      tokenBWithdrawalSpread: this.tokenBWithdrawalSpread,
      tokenBReferralSpread: this.tokenBReferralSpread,
      admin: this.admin.toString(),
    }
  }

  static fromJSON(
    obj: InitializeVaultProtoConfigParamsJSON
  ): InitializeVaultProtoConfigParams {
    return new InitializeVaultProtoConfigParams({
      granularity: BigInt(obj.granularity),
      tokenADripTriggerSpread: obj.tokenADripTriggerSpread,
      tokenBWithdrawalSpread: obj.tokenBWithdrawalSpread,
      tokenBReferralSpread: obj.tokenBReferralSpread,
      admin: new PublicKey(obj.admin),
    })
  }
}
