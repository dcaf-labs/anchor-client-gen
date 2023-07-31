// This file was automatically generated. DO NOT MODIFY DIRECTLY.
import { PublicKey } from "@solana/web3.js"
import { InitVaultProtoConfig } from "./initVaultProtoConfig"
import { InitVaultPeriod } from "./initVaultPeriod"
import { Deposit } from "./deposit"
import { DepositWithMetadata } from "./depositWithMetadata"
import { DripSplTokenSwap } from "./dripSplTokenSwap"
import { DripOrcaWhirlpool } from "./dripOrcaWhirlpool"
import { WithdrawB } from "./withdrawB"
import { ClosePosition } from "./closePosition"
import { InitVault } from "./initVault"
import { SetVaultSwapWhitelist } from "./setVaultSwapWhitelist"
import { WithdrawA } from "./withdrawA"

export * from "./initVaultProtoConfig"
export type {
  InitVaultProtoConfigArgs,
  InitVaultProtoConfigAccounts,
} from "./initVaultProtoConfig"
export * from "./initVaultPeriod"
export type {
  InitVaultPeriodArgs,
  InitVaultPeriodAccounts,
} from "./initVaultPeriod"
export * from "./deposit"
export type { DepositArgs, DepositAccounts } from "./deposit"
export * from "./depositWithMetadata"
export type {
  DepositWithMetadataArgs,
  DepositWithMetadataAccounts,
} from "./depositWithMetadata"
export * from "./dripSplTokenSwap"
export type { DripSplTokenSwapAccounts } from "./dripSplTokenSwap"
export * from "./dripOrcaWhirlpool"
export type { DripOrcaWhirlpoolAccounts } from "./dripOrcaWhirlpool"
export * from "./withdrawB"
export type { WithdrawBAccounts } from "./withdrawB"
export * from "./closePosition"
export type { ClosePositionAccounts } from "./closePosition"
export * from "./initVault"
export type { InitVaultArgs, InitVaultAccounts } from "./initVault"
export * from "./setVaultSwapWhitelist"
export type {
  SetVaultSwapWhitelistArgs,
  SetVaultSwapWhitelistAccounts,
} from "./setVaultSwapWhitelist"
export * from "./withdrawA"
export type { WithdrawAAccounts } from "./withdrawA"

export enum DripInstructionNames {
  initVaultProtoConfig = "initVaultProtoConfig",
  initVaultPeriod = "initVaultPeriod",
  deposit = "deposit",
  depositWithMetadata = "depositWithMetadata",
  dripSplTokenSwap = "dripSplTokenSwap",
  dripOrcaWhirlpool = "dripOrcaWhirlpool",
  withdrawB = "withdrawB",
  closePosition = "closePosition",
  initVault = "initVault",
  setVaultSwapWhitelist = "setVaultSwapWhitelist",
  withdrawA = "withdrawA",
}

export interface InstructionHandler<T> {
  initVaultProtoConfigIxHandler(ix: InitVaultProtoConfig): Promise<T>
  initVaultPeriodIxHandler(ix: InitVaultPeriod): Promise<T>
  depositIxHandler(ix: Deposit): Promise<T>
  depositWithMetadataIxHandler(ix: DepositWithMetadata): Promise<T>
  dripSplTokenSwapIxHandler(ix: DripSplTokenSwap): Promise<T>
  dripOrcaWhirlpoolIxHandler(ix: DripOrcaWhirlpool): Promise<T>
  withdrawBIxHandler(ix: WithdrawB): Promise<T>
  closePositionIxHandler(ix: ClosePosition): Promise<T>
  initVaultIxHandler(ix: InitVault): Promise<T>
  setVaultSwapWhitelistIxHandler(ix: SetVaultSwapWhitelist): Promise<T>
  withdrawAIxHandler(ix: WithdrawA): Promise<T>
}

export async function processInstruction<T>(
  programId: PublicKey,
  ixData: Uint8Array,
  accounts: PublicKey[],
  instructionHandler: InstructionHandler<T>
): Promise<T | undefined> {
  const ixDataBuff = Buffer.from(ixData)
  if (InitVaultProtoConfig.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = InitVaultProtoConfig.decode(
      programId,
      ixDataBuff,
      accounts
    )
    return await instructionHandler.initVaultProtoConfigIxHandler(decodedIx)
  }
  if (InitVaultPeriod.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = InitVaultPeriod.decode(programId, ixDataBuff, accounts)
    return await instructionHandler.initVaultPeriodIxHandler(decodedIx)
  }
  if (Deposit.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = Deposit.decode(programId, ixDataBuff, accounts)
    return await instructionHandler.depositIxHandler(decodedIx)
  }
  if (DepositWithMetadata.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = DepositWithMetadata.decode(
      programId,
      ixDataBuff,
      accounts
    )
    return await instructionHandler.depositWithMetadataIxHandler(decodedIx)
  }
  if (DripSplTokenSwap.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = DripSplTokenSwap.decode(programId, accounts)
    return await instructionHandler.dripSplTokenSwapIxHandler(decodedIx)
  }
  if (DripOrcaWhirlpool.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = DripOrcaWhirlpool.decode(programId, accounts)
    return await instructionHandler.dripOrcaWhirlpoolIxHandler(decodedIx)
  }
  if (WithdrawB.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = WithdrawB.decode(programId, accounts)
    return await instructionHandler.withdrawBIxHandler(decodedIx)
  }
  if (ClosePosition.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = ClosePosition.decode(programId, accounts)
    return await instructionHandler.closePositionIxHandler(decodedIx)
  }
  if (InitVault.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = InitVault.decode(programId, ixDataBuff, accounts)
    return await instructionHandler.initVaultIxHandler(decodedIx)
  }
  if (SetVaultSwapWhitelist.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = SetVaultSwapWhitelist.decode(
      programId,
      ixDataBuff,
      accounts
    )
    return await instructionHandler.setVaultSwapWhitelistIxHandler(decodedIx)
  }
  if (WithdrawA.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = WithdrawA.decode(programId, accounts)
    return await instructionHandler.withdrawAIxHandler(decodedIx)
  }
  return undefined
}
