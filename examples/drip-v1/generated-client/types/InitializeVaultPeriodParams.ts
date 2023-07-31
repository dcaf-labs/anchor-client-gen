// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey } from "@solana/web3.js"
import BN from "bn.js"
import * as types from "../types"
import * as borsh from "@coral-xyz/borsh"

export interface InitializeVaultPeriodParamsFields {
  periodId: bigint
}

export interface InitializeVaultPeriodParamsJSON {
  periodId: string
}

export class InitializeVaultPeriodParams {
  readonly periodId: bigint

  constructor(fields: InitializeVaultPeriodParamsFields) {
    this.periodId = fields.periodId
  }

  static layout(property?: string) {
    return borsh.struct([borsh.u64("periodId")], property)
  }

  static fromDecoded(obj: any) {
    return new InitializeVaultPeriodParams({
      periodId: obj.periodId,
    })
  }

  static toEncodable(fields: InitializeVaultPeriodParamsFields) {
    return {
      periodId: new BN(fields.periodId.toString()),
    }
  }

  toEncodable() {
    return InitializeVaultPeriodParams.toEncodable(this)
  }

  toJSON(): InitializeVaultPeriodParamsJSON {
    return {
      periodId: this.periodId.toString(),
    }
  }

  static fromJSON(
    obj: InitializeVaultPeriodParamsJSON
  ): InitializeVaultPeriodParams {
    return new InitializeVaultPeriodParams({
      periodId: BigInt(obj.periodId),
    })
  }
}
