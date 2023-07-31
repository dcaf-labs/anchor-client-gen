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

export interface InstructionHandler<T> {
  createIxHandler(ix: Create): Promise<T>
  incrementIxHandler(ix: Increment): Promise<T>
}

export async function processInstruction<T>(
  programId: PublicKey,
  ixData: Uint8Array,
  accounts: PublicKey[],
  instructionHandler: InstructionHandler<T>
): Promise<T | undefined> {
  const ixDataBuff = Buffer.from(ixData)
  if (Create.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = Create.decode(programId, ixDataBuff, accounts)
    return await instructionHandler.createIxHandler(decodedIx)
  }
  if (Increment.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = Increment.decode(programId, accounts)
    return await instructionHandler.incrementIxHandler(decodedIx)
  }
  return undefined
}
