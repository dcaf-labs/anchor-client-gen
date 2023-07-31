// This file was automatically generated. DO NOT MODIFY DIRECTLY.
import { PublicKey } from "@solana/web3.js"
import { SetupGame } from "./setupGame"
import { Play } from "./play"

export * from "./setupGame"
export type { SetupGameArgs, SetupGameAccounts } from "./setupGame"
export * from "./play"
export type { PlayArgs, PlayAccounts } from "./play"

export enum TicTacToeInstructionNames {
  setupGame = "setupGame",
  play = "play",
}

export interface InstructionHandler {
  setupGameIxHandler(ix: SetupGame): Promise<void>
  playIxHandler(ix: Play): Promise<void>
}

export async function processInstruction(
  programId: PublicKey,
  ixData: Uint8Array,
  accounts: PublicKey[],
  instructionHandler: InstructionHandler
): Promise<boolean> {
  const ixDataBuff = Buffer.from(ixData)
  if (SetupGame.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = SetupGame.decode(programId, ixDataBuff, accounts)
    await instructionHandler.setupGameIxHandler(decodedIx)
    return true
  }
  if (Play.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = Play.decode(programId, ixDataBuff, accounts)
    await instructionHandler.playIxHandler(decodedIx)
    return true
  }
  return false
}
