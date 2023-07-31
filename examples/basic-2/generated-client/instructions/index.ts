// This file was automatically generated. DO NOT MODIFY DIRECTLY.
import { PublicKey } from "@solana/web3.js"
import { Create } from "./create"
import { Increment } from "./increment"

export * from "./create"
export type { CreateArgs, CreateAccounts } from "./create"
export * from "./increment"
export type { IncrementAccounts } from "./increment"

export enum Basic2InstructionNames {
  create = "create",
  increment = "increment",
}

export interface InstructionHandler {
  createIxHandler(ix: Create): Promise<void>
  incrementIxHandler(ix: Increment): Promise<void>
}

export async function processInstruction(
  programId: PublicKey,
  ixData: Uint8Array,
  accounts: PublicKey[],
  instructionHandler: InstructionHandler
): Promise<boolean> {
  const ixDataBuff = Buffer.from(ixData)
  if (Create.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = Create.decode(programId, ixDataBuff, accounts)
    await instructionHandler.createIxHandler(decodedIx)
    return true
  }
  if (Increment.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = Increment.decode(programId, accounts)
    await instructionHandler.incrementIxHandler(decodedIx)
    return true
  }
  return false
}
