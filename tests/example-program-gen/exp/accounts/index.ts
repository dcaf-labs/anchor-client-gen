import { State } from "./State"
import { State2 } from "./State2"

// This file was automatically generated. DO NOT MODIFY DIRECTLY.
export { State } from "./State"
export type { StateAccount, StateAccountJSON } from "./State"
export { State2 } from "./State2"
export type { State2Account, State2AccountJSON } from "./State2"

export interface AccountHandler {
  stateAccountHandler(account: State): Promise<void>
  state2AccountHandler(account: State2): Promise<void>
}

export async function processAccount(
  accountData: Uint8Array,
  accountHandler: AccountHandler
): Promise<boolean> {
  const accountDataBuff = Buffer.from(accountData)
  if (State.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = State.decode(accountDataBuff)
    await accountHandler.stateAccountHandler(decodedAccount)
    return true
  }
  if (State2.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = State2.decode(accountDataBuff)
    await accountHandler.state2AccountHandler(decodedAccount)
    return true
  }
  return false
}
