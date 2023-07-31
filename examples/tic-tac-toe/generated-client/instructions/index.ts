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

export interface InstructionHandler<T> {
  setupGameIxHandler(ix: SetupGame): Promise<T>
  playIxHandler(ix: Play): Promise<T>
}

export async function processInstruction<T>(
  programId: PublicKey,
  ixData: Uint8Array,
  accounts: PublicKey[],
  instructionHandler: InstructionHandler<T>
): Promise<T | undefined> {
  const ixDataBuff = Buffer.from(ixData)
  if (SetupGame.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = SetupGame.decode(programId, ixDataBuff, accounts)
    return await instructionHandler.setupGameIxHandler(decodedIx)
  }
  if (Play.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = Play.decode(programId, ixDataBuff, accounts)
    return await instructionHandler.playIxHandler(decodedIx)
  }
  return undefined
}
