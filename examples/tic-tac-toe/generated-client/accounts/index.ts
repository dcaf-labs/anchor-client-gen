import { Game } from "./Game"

// This file was automatically generated. DO NOT MODIFY DIRECTLY.
export { Game } from "./Game"
export type { GameAccount, GameAccountJSON } from "./Game"

export interface AccountHandler {
  gameAccountHandler(account: Game): Promise<void>
}

export async function processAccount(
  accountData: Uint8Array,
  accountHandler: AccountHandler
): Promise<boolean> {
  const accountDataBuff = Buffer.from(accountData)
  if (Game.isDiscriminatorEqual(accountDataBuff)) {
    const decodedAccount = Game.decode(accountDataBuff)
    await accountHandler.gameAccountHandler(decodedAccount)
    return true
  }
  return false
}
