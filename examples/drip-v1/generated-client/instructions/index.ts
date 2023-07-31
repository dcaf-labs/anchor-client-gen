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

export interface InstructionHandler {
  initVaultProtoConfigIxHandler(ix: InitVaultProtoConfig): Promise<void>
  initVaultPeriodIxHandler(ix: InitVaultPeriod): Promise<void>
  depositIxHandler(ix: Deposit): Promise<void>
  depositWithMetadataIxHandler(ix: DepositWithMetadata): Promise<void>
  dripSplTokenSwapIxHandler(ix: DripSplTokenSwap): Promise<void>
  dripOrcaWhirlpoolIxHandler(ix: DripOrcaWhirlpool): Promise<void>
  withdrawBIxHandler(ix: WithdrawB): Promise<void>
  closePositionIxHandler(ix: ClosePosition): Promise<void>
  initVaultIxHandler(ix: InitVault): Promise<void>
  setVaultSwapWhitelistIxHandler(ix: SetVaultSwapWhitelist): Promise<void>
  withdrawAIxHandler(ix: WithdrawA): Promise<void>
}

export async function processInstruction(
  programId: PublicKey,
  ixData: Uint8Array,
  accounts: PublicKey[],
  instructionHandler: InstructionHandler
): Promise<boolean> {
  const ixDataBuff = Buffer.from(ixData)
  if (InitVaultProtoConfig.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = InitVaultProtoConfig.decode(
      programId,
      ixDataBuff,
      accounts
    )
    await instructionHandler.initVaultProtoConfigIxHandler(decodedIx)
    return true
  }
  if (InitVaultPeriod.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = InitVaultPeriod.decode(programId, ixDataBuff, accounts)
    await instructionHandler.initVaultPeriodIxHandler(decodedIx)
    return true
  }
  if (Deposit.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = Deposit.decode(programId, ixDataBuff, accounts)
    await instructionHandler.depositIxHandler(decodedIx)
    return true
  }
  if (DepositWithMetadata.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = DepositWithMetadata.decode(
      programId,
      ixDataBuff,
      accounts
    )
    await instructionHandler.depositWithMetadataIxHandler(decodedIx)
    return true
  }
  if (DripSplTokenSwap.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = DripSplTokenSwap.decode(programId, accounts)
    await instructionHandler.dripSplTokenSwapIxHandler(decodedIx)
    return true
  }
  if (DripOrcaWhirlpool.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = DripOrcaWhirlpool.decode(programId, accounts)
    await instructionHandler.dripOrcaWhirlpoolIxHandler(decodedIx)
    return true
  }
  if (WithdrawB.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = WithdrawB.decode(programId, accounts)
    await instructionHandler.withdrawBIxHandler(decodedIx)
    return true
  }
  if (ClosePosition.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = ClosePosition.decode(programId, accounts)
    await instructionHandler.closePositionIxHandler(decodedIx)
    return true
  }
  if (InitVault.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = InitVault.decode(programId, ixDataBuff, accounts)
    await instructionHandler.initVaultIxHandler(decodedIx)
    return true
  }
  if (SetVaultSwapWhitelist.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = SetVaultSwapWhitelist.decode(
      programId,
      ixDataBuff,
      accounts
    )
    await instructionHandler.setVaultSwapWhitelistIxHandler(decodedIx)
    return true
  }
  if (WithdrawA.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = WithdrawA.decode(programId, accounts)
    await instructionHandler.withdrawAIxHandler(decodedIx)
    return true
  }
  return false
}
