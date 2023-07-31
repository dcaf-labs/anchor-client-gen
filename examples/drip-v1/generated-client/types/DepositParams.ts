// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey } from "@solana/web3.js"
import BN from "bn.js"
import * as types from "../types"
import * as borsh from "@coral-xyz/borsh"

export interface DepositParamsFields {
  tokenADepositAmount: bigint
  numberOfSwaps: bigint
}

export interface DepositParamsJSON {
  tokenADepositAmount: string
  numberOfSwaps: string
}

export class DepositParams {
  readonly tokenADepositAmount: bigint
  readonly numberOfSwaps: bigint

  constructor(fields: DepositParamsFields) {
    this.tokenADepositAmount = fields.tokenADepositAmount
    this.numberOfSwaps = fields.numberOfSwaps
  }

  static layout(property?: string) {
    return borsh.struct(
      [borsh.u64("tokenADepositAmount"), borsh.u64("numberOfSwaps")],
      property
    )
  }

  static fromDecoded(obj: any) {
    return new DepositParams({
      tokenADepositAmount: obj.tokenADepositAmount,
      numberOfSwaps: obj.numberOfSwaps,
    })
  }

  static toEncodable(fields: DepositParamsFields) {
    return {
      tokenADepositAmount: new BN(fields.tokenADepositAmount.toString()),
      numberOfSwaps: new BN(fields.numberOfSwaps.toString()),
    }
  }

  toEncodable() {
    return DepositParams.toEncodable(this)
  }

  toJSON(): DepositParamsJSON {
    return {
      tokenADepositAmount: this.tokenADepositAmount.toString(),
      numberOfSwaps: this.numberOfSwaps.toString(),
    }
  }

  static fromJSON(obj: DepositParamsJSON): DepositParams {
    return new DepositParams({
      tokenADepositAmount: BigInt(obj.tokenADepositAmount),
      numberOfSwaps: BigInt(obj.numberOfSwaps),
    })
  }
}
