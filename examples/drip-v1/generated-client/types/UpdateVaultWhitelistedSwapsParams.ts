// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey } from "@solana/web3.js"
import BN from "bn.js"
import * as types from "../types"
import * as borsh from "@coral-xyz/borsh"

export interface UpdateVaultWhitelistedSwapsParamsFields {
  whitelistedSwaps: Array<PublicKey>
}

export interface UpdateVaultWhitelistedSwapsParamsJSON {
  whitelistedSwaps: Array<string>
}

export class UpdateVaultWhitelistedSwapsParams {
  readonly whitelistedSwaps: Array<PublicKey>

  constructor(fields: UpdateVaultWhitelistedSwapsParamsFields) {
    this.whitelistedSwaps = fields.whitelistedSwaps
  }

  static layout(property?: string) {
    return borsh.struct(
      [borsh.vec(borsh.publicKey(), "whitelistedSwaps")],
      property
    )
  }

  static fromDecoded(obj: any) {
    return new UpdateVaultWhitelistedSwapsParams({
      whitelistedSwaps: obj.whitelistedSwaps,
    })
  }

  static toEncodable(fields: UpdateVaultWhitelistedSwapsParamsFields) {
    return {
      whitelistedSwaps: fields.whitelistedSwaps,
    }
  }

  toEncodable() {
    return UpdateVaultWhitelistedSwapsParams.toEncodable(this)
  }

  toJSON(): UpdateVaultWhitelistedSwapsParamsJSON {
    return {
      whitelistedSwaps: this.whitelistedSwaps.map((item) => item.toString()),
    }
  }

  static fromJSON(
    obj: UpdateVaultWhitelistedSwapsParamsJSON
  ): UpdateVaultWhitelistedSwapsParams {
    return new UpdateVaultWhitelistedSwapsParams({
      whitelistedSwaps: obj.whitelistedSwaps.map((item) => new PublicKey(item)),
    })
  }
}
