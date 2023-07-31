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
  ixData: Uint8Array,
  accounts: PublicKey[],
  instructionHandler: InstructionHandler
): Promise<void> {
  const identifier = Buffer.from(ixData.slice(0, 8))
  if (Create.isIdentifierEqual(identifier)) {
    const decodedIx = Create.decode(ixData, accounts)
    await instructionHandler.createIxHandler(decodedIx)
  }
  if (Increment.isIdentifierEqual(identifier)) {
    const decodedIx = Increment.decode(accounts)
    await instructionHandler.incrementIxHandler(decodedIx)
  }
}
