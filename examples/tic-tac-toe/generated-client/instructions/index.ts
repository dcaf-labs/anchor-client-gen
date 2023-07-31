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
  ixData: Uint8Array,
  accounts: PublicKey[],
  instructionHandler: InstructionHandler
): Promise<void> {
  const identifier = Buffer.from(ixData.slice(0, 8))
  if (SetupGame.isIdentifierEqual(identifier)) {
    const decodedIx = SetupGame.decode(ixData, accounts)
    await instructionHandler.setupGameIxHandler(decodedIx)
  }
  if (Play.isIdentifierEqual(identifier)) {
    const decodedIx = Play.decode(ixData, accounts)
    await instructionHandler.playIxHandler(decodedIx)
  }
}
