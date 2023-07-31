// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface VaultAccount {
  protoConfig: PublicKey
  tokenAMint: PublicKey
  tokenBMint: PublicKey
  tokenAAccount: PublicKey
  tokenBAccount: PublicKey
  treasuryTokenBAccount: PublicKey
  whitelistedSwaps: Array<PublicKey>
  lastDripPeriod: bigint
  dripAmount: bigint
  dripActivationTimestamp: bigint
  bump: number
  limitSwaps: boolean
  maxSlippageBps: number
}

export interface VaultAccountJSON {
  protoConfig: string
  tokenAMint: string
  tokenBMint: string
  tokenAAccount: string
  tokenBAccount: string
  treasuryTokenBAccount: string
  whitelistedSwaps: Array<string>
  lastDripPeriod: string
  dripAmount: string
  dripActivationTimestamp: string
  bump: number
  limitSwaps: boolean
  maxSlippageBps: number
}

export class Vault {
  readonly data: VaultAccount

  static readonly discriminator = Buffer.from([
    211, 8, 232, 43, 2, 152, 117, 119,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("protoConfig"),
    borsh.publicKey("tokenAMint"),
    borsh.publicKey("tokenBMint"),
    borsh.publicKey("tokenAAccount"),
    borsh.publicKey("tokenBAccount"),
    borsh.publicKey("treasuryTokenBAccount"),
    borsh.array(borsh.publicKey(), 5, "whitelistedSwaps"),
    borsh.u64("lastDripPeriod"),
    borsh.u64("dripAmount"),
    borsh.i64("dripActivationTimestamp"),
    borsh.u8("bump"),
    borsh.bool("limitSwaps"),
    borsh.u16("maxSlippageBps"),
  ])

  constructor(accountData: VaultAccount) {
    this.data = {
      protoConfig: accountData.protoConfig,
      tokenAMint: accountData.tokenAMint,
      tokenBMint: accountData.tokenBMint,
      tokenAAccount: accountData.tokenAAccount,
      tokenBAccount: accountData.tokenBAccount,
      treasuryTokenBAccount: accountData.treasuryTokenBAccount,
      whitelistedSwaps: accountData.whitelistedSwaps,
      lastDripPeriod: accountData.lastDripPeriod,
      dripAmount: accountData.dripAmount,
      dripActivationTimestamp: accountData.dripActivationTimestamp,
      bump: accountData.bump,
      limitSwaps: accountData.limitSwaps,
      maxSlippageBps: accountData.maxSlippageBps,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(Vault.discriminator)
  }

  static decode(data: Buffer): Vault {
    if (!Vault.isDiscriminatorEqual(data)) {
      throw new Error("Invalid account discriminator.")
    }

    const dec = Vault.layout.decode(data.subarray(8))

    return new Vault({
      protoConfig: dec.protoConfig,
      tokenAMint: dec.tokenAMint,
      tokenBMint: dec.tokenBMint,
      tokenAAccount: dec.tokenAAccount,
      tokenBAccount: dec.tokenBAccount,
      treasuryTokenBAccount: dec.treasuryTokenBAccount,
      whitelistedSwaps: dec.whitelistedSwaps,
      lastDripPeriod: dec.lastDripPeriod,
      dripAmount: dec.dripAmount,
      dripActivationTimestamp: dec.dripActivationTimestamp,
      bump: dec.bump,
      limitSwaps: dec.limitSwaps,
      maxSlippageBps: dec.maxSlippageBps,
    })
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey,
    getAccountInfoConfig?: GetAccountInfoConfig
  ): Promise<Vault | null> {
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
  ): Promise<Vault> {
    const account = await Vault.fetch(
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
  ): Promise<VaultAccount | null> {
    return await Vault.fetchNonNullable(
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
  ): Promise<VaultAccount> {
    return await Vault.fetchNonNullable(
      c,
      address,
      programId,
      getAccountInfoConfig,
      notFoundError
    ).then((a) => a.data)
  }

  static toJSON(data: VaultAccount): VaultAccountJSON {
    // convert fields to classes if needed
    const account = {
      protoConfig: data.protoConfig,
      tokenAMint: data.tokenAMint,
      tokenBMint: data.tokenBMint,
      tokenAAccount: data.tokenAAccount,
      tokenBAccount: data.tokenBAccount,
      treasuryTokenBAccount: data.treasuryTokenBAccount,
      whitelistedSwaps: data.whitelistedSwaps,
      lastDripPeriod: data.lastDripPeriod,
      dripAmount: data.dripAmount,
      dripActivationTimestamp: data.dripActivationTimestamp,
      bump: data.bump,
      limitSwaps: data.limitSwaps,
      maxSlippageBps: data.maxSlippageBps,
    }
    return {
      protoConfig: account.protoConfig.toString(),
      tokenAMint: account.tokenAMint.toString(),
      tokenBMint: account.tokenBMint.toString(),
      tokenAAccount: account.tokenAAccount.toString(),
      tokenBAccount: account.tokenBAccount.toString(),
      treasuryTokenBAccount: account.treasuryTokenBAccount.toString(),
      whitelistedSwaps: account.whitelistedSwaps.map((item) => item.toString()),
      lastDripPeriod: account.lastDripPeriod.toString(),
      dripAmount: account.dripAmount.toString(),
      dripActivationTimestamp: account.dripActivationTimestamp.toString(),
      bump: account.bump,
      limitSwaps: account.limitSwaps,
      maxSlippageBps: account.maxSlippageBps,
    }
  }

  toJSON(): VaultAccountJSON {
    return Vault.toJSON(this.data)
  }

  static fromJSON(obj: VaultAccountJSON): Vault {
    return new Vault({
      protoConfig: new PublicKey(obj.protoConfig),
      tokenAMint: new PublicKey(obj.tokenAMint),
      tokenBMint: new PublicKey(obj.tokenBMint),
      tokenAAccount: new PublicKey(obj.tokenAAccount),
      tokenBAccount: new PublicKey(obj.tokenBAccount),
      treasuryTokenBAccount: new PublicKey(obj.treasuryTokenBAccount),
      whitelistedSwaps: obj.whitelistedSwaps.map((item) => new PublicKey(item)),
      lastDripPeriod: BigInt(obj.lastDripPeriod),
      dripAmount: BigInt(obj.dripAmount),
      dripActivationTimestamp: BigInt(obj.dripActivationTimestamp),
      bump: obj.bump,
      limitSwaps: obj.limitSwaps,
      maxSlippageBps: obj.maxSlippageBps,
    })
  }
}
