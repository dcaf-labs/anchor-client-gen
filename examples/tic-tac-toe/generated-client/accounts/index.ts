import { Game } from "./Game"

// This file was automatically generated. DO NOT MODIFY DIRECTLY.
export { Game } from "./Game"
export type { GameAccount, GameAccountJSON } from "./Game"

export interface AccountHandler<T> {
  gameAccountHandler(account: Game): Promise<T>
}

export async function processAccount<T>(
  accountData: Uint8Array,
  accountHandler: AccountHandler<T>
): Promise<T | undefined> {
  const accountDataBuff = Buffer.from(accountData)
  if (Game.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = Game.decode(accountDataBuff)
    return await accountHandler.gameAccountHandler(decodedAccount)
  }
  return undefined
}
