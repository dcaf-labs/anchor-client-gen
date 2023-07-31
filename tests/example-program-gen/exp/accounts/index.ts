import { State } from "./State"
import { State2 } from "./State2"

// This file was automatically generated. DO NOT MODIFY DIRECTLY.
export { State } from "./State"
export type { StateAccount, StateAccountJSON } from "./State"
export { State2 } from "./State2"
export type { State2Account, State2AccountJSON } from "./State2"

export interface AccountHandler<T> {
  stateAccountHandler(account: State): Promise<T>
  state2AccountHandler(account: State2): Promise<T>
}

export async function processAccount<T>(
  accountData: Uint8Array,
  accountHandler: AccountHandler<T>
): Promise<T | undefined> {
  const accountDataBuff = Buffer.from(accountData)
  if (State.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = State.decode(accountDataBuff)
    return await accountHandler.stateAccountHandler(decodedAccount)
  }
  if (State2.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = State2.decode(accountDataBuff)
    return await accountHandler.state2AccountHandler(decodedAccount)
  }
  return undefined
}
