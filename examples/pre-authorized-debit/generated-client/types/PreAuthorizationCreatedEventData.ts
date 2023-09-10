// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey } from "@solana/web3.js"
import BN from "bn.js"
import * as types from "../types"
import * as borsh from "@coral-xyz/borsh"

export interface PreAuthorizationCreatedEventDataFields {
  debitAuthority: PublicKey
  owner: PublicKey
  payer: PublicKey
  tokenAccount: PublicKey
  preAuthorization: PublicKey
  initParams: types.InitPreAuthorizationParamsFields
}

export interface PreAuthorizationCreatedEventDataJSON {
  debitAuthority: string
  owner: string
  payer: string
  tokenAccount: string
  preAuthorization: string
  initParams: types.InitPreAuthorizationParamsJSON
}

export class PreAuthorizationCreatedEventData {
  readonly debitAuthority: PublicKey
  readonly owner: PublicKey
  readonly payer: PublicKey
  readonly tokenAccount: PublicKey
  readonly preAuthorization: PublicKey
  readonly initParams: types.InitPreAuthorizationParams

  constructor(fields: PreAuthorizationCreatedEventDataFields) {
    this.debitAuthority = fields.debitAuthority
    this.owner = fields.owner
    this.payer = fields.payer
    this.tokenAccount = fields.tokenAccount
    this.preAuthorization = fields.preAuthorization
    this.initParams = new types.InitPreAuthorizationParams({
      ...fields.initParams,
    })
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.publicKey("debitAuthority"),
        borsh.publicKey("owner"),
        borsh.publicKey("payer"),
        borsh.publicKey("tokenAccount"),
        borsh.publicKey("preAuthorization"),
        types.InitPreAuthorizationParams.layout("initParams"),
      ],
      property
    )
  }

  static fromDecoded(obj: any) {
    return new PreAuthorizationCreatedEventData({
      debitAuthority: obj.debitAuthority,
      owner: obj.owner,
      payer: obj.payer,
      tokenAccount: obj.tokenAccount,
      preAuthorization: obj.preAuthorization,
      initParams: types.InitPreAuthorizationParams.fromDecoded(obj.initParams),
    })
  }

  static toEncodable(fields: PreAuthorizationCreatedEventDataFields) {
    return {
      debitAuthority: fields.debitAuthority,
      owner: fields.owner,
      payer: fields.payer,
      tokenAccount: fields.tokenAccount,
      preAuthorization: fields.preAuthorization,
      initParams: types.InitPreAuthorizationParams.toEncodable(
        fields.initParams
      ),
    }
  }

  toEncodable() {
    return PreAuthorizationCreatedEventData.toEncodable(this)
  }

  toJSON(): PreAuthorizationCreatedEventDataJSON {
    return {
      debitAuthority: this.debitAuthority.toString(),
      owner: this.owner.toString(),
      payer: this.payer.toString(),
      tokenAccount: this.tokenAccount.toString(),
      preAuthorization: this.preAuthorization.toString(),
      initParams: this.initParams.toJSON(),
    }
  }

  static fromJSON(
    obj: PreAuthorizationCreatedEventDataJSON
  ): PreAuthorizationCreatedEventData {
    return new PreAuthorizationCreatedEventData({
      debitAuthority: new PublicKey(obj.debitAuthority),
      owner: new PublicKey(obj.owner),
      payer: new PublicKey(obj.payer),
      tokenAccount: new PublicKey(obj.tokenAccount),
      preAuthorization: new PublicKey(obj.preAuthorization),
      initParams: types.InitPreAuthorizationParams.fromJSON(obj.initParams),
    })
  }
}