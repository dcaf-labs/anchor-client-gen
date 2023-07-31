import { Counter } from "./Counter"

// This file was automatically generated. DO NOT MODIFY DIRECTLY.
export { Counter } from "./Counter"
export type { CounterAccount, CounterAccountJSON } from "./Counter"

export interface AccountHandler<T> {
  counterAccountHandler(account: Counter): Promise<T>
}

export async function processAccount<T>(
  accountData: Uint8Array,
  accountHandler: AccountHandler<T>
): Promise<T | undefined> {
  const accountDataBuff = Buffer.from(accountData)
  if (Counter.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = Counter.decode(accountDataBuff)
    return await accountHandler.counterAccountHandler(decodedAccount)
  }
  return undefined
}
