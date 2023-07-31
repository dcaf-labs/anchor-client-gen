import { Position } from "./Position"
import { VaultPeriod } from "./VaultPeriod"
import { VaultProtoConfig } from "./VaultProtoConfig"
import { Vault } from "./Vault"
import { NoData } from "./NoData"

// This file was automatically generated. DO NOT MODIFY DIRECTLY.
export { Position } from "./Position"
export type { PositionAccount, PositionAccountJSON } from "./Position"
export { VaultPeriod } from "./VaultPeriod"
export type { VaultPeriodAccount, VaultPeriodAccountJSON } from "./VaultPeriod"
export { VaultProtoConfig } from "./VaultProtoConfig"
export type {
  VaultProtoConfigAccount,
  VaultProtoConfigAccountJSON,
} from "./VaultProtoConfig"
export { Vault } from "./Vault"
export type { VaultAccount, VaultAccountJSON } from "./Vault"
export { NoData } from "./NoData"
export type { NoDataAccount, NoDataAccountJSON } from "./NoData"

export interface AccountHandler {
  positionAccountHandler(account: Position): Promise<void>
  vaultPeriodAccountHandler(account: VaultPeriod): Promise<void>
  vaultProtoConfigAccountHandler(account: VaultProtoConfig): Promise<void>
  vaultAccountHandler(account: Vault): Promise<void>
  noDataAccountHandler(account: NoData): Promise<void>
}

export async function processAccount(
  accountData: Uint8Array,
  accountHandler: AccountHandler
): Promise<boolean> {
  const accountDataBuff = Buffer.from(accountData)
  if (Position.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = Position.decode(accountDataBuff)
    await accountHandler.positionAccountHandler(decodedAccount)
    return true
  }
  if (VaultPeriod.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = VaultPeriod.decode(accountDataBuff)
    await accountHandler.vaultPeriodAccountHandler(decodedAccount)
    return true
  }
  if (VaultProtoConfig.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = VaultProtoConfig.decode(accountDataBuff)
    await accountHandler.vaultProtoConfigAccountHandler(decodedAccount)
    return true
  }
  if (Vault.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = Vault.decode(accountDataBuff)
    await accountHandler.vaultAccountHandler(decodedAccount)
    return true
  }
  if (NoData.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = NoData.decode(accountDataBuff)
    await accountHandler.noDataAccountHandler(decodedAccount)
    return true
  }
  return false
}
