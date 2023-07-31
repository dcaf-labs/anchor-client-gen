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

export interface AccountHandler<T> {
  positionAccountHandler(account: Position): Promise<T>
  vaultPeriodAccountHandler(account: VaultPeriod): Promise<T>
  vaultProtoConfigAccountHandler(account: VaultProtoConfig): Promise<T>
  vaultAccountHandler(account: Vault): Promise<T>
  noDataAccountHandler(account: NoData): Promise<T>
}

export async function processAccount<T>(
  accountData: Uint8Array,
  accountHandler: AccountHandler<T>
): Promise<T | undefined> {
  const accountDataBuff = Buffer.from(accountData)
  if (Position.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = Position.decode(accountDataBuff)
    return await accountHandler.positionAccountHandler(decodedAccount)
  }
  if (VaultPeriod.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = VaultPeriod.decode(accountDataBuff)
    return await accountHandler.vaultPeriodAccountHandler(decodedAccount)
  }
  if (VaultProtoConfig.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = VaultProtoConfig.decode(accountDataBuff)
    return await accountHandler.vaultProtoConfigAccountHandler(decodedAccount)
  }
  if (Vault.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = Vault.decode(accountDataBuff)
    return await accountHandler.vaultAccountHandler(decodedAccount)
  }
  if (NoData.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = NoData.decode(accountDataBuff)
    return await accountHandler.noDataAccountHandler(decodedAccount)
  }
  return undefined
}
