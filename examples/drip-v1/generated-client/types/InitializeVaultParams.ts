// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey } from "@solana/web3.js"
import BN from "bn.js"
import * as types from "../types"
import * as borsh from "@coral-xyz/borsh"

export interface InitializeVaultParamsFields {
  maxSlippageBps: number
  whitelistedSwaps: Array<PublicKey>
}

export interface InitializeVaultParamsJSON {
  maxSlippageBps: number
  whitelistedSwaps: Array<string>
}

export class InitializeVaultParams {
  readonly maxSlippageBps: number
  readonly whitelistedSwaps: Array<PublicKey>

  constructor(fields: InitializeVaultParamsFields) {
    this.maxSlippageBps = fields.maxSlippageBps
    this.whitelistedSwaps = fields.whitelistedSwaps
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.u16("maxSlippageBps"),
        borsh.vec(borsh.publicKey(), "whitelistedSwaps"),
      ],
      property
    )
  }

  static fromDecoded(obj: any) {
    return new InitializeVaultParams({
      maxSlippageBps: obj.maxSlippageBps,
      whitelistedSwaps: obj.whitelistedSwaps,
    })
  }

  static toEncodable(fields: InitializeVaultParamsFields) {
    return {
      maxSlippageBps: fields.maxSlippageBps,
      whitelistedSwaps: fields.whitelistedSwaps,
    }
  }

  toEncodable() {
    return InitializeVaultParams.toEncodable(this)
  }

  toJSON(): InitializeVaultParamsJSON {
    return {
      maxSlippageBps: this.maxSlippageBps,
      whitelistedSwaps: this.whitelistedSwaps.map((item) => item.toString()),
    }
  }

  static fromJSON(obj: InitializeVaultParamsJSON): InitializeVaultParams {
    return new InitializeVaultParams({
      maxSlippageBps: obj.maxSlippageBps,
      whitelistedSwaps: obj.whitelistedSwaps.map((item) => new PublicKey(item)),
    })
  }
}
