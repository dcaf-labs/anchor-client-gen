import { Counter } from "./Counter"

// This file was automatically generated. DO NOT MODIFY DIRECTLY.
export { Counter } from "./Counter"
export type { CounterAccount, CounterAccountJSON } from "./Counter"

export interface AccountHandler {
  counterAccountHandler(account: Counter): Promise<void>
}

export async function processAccount(
  accountData: Uint8Array,
  accountHandler: AccountHandler
): Promise<boolean> {
  const accountDataBuff = Buffer.from(accountData)
  if (Counter.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = Counter.decode(accountDataBuff)
    await accountHandler.counterAccountHandler(decodedAccount)
    return true
  }
  return false
}
