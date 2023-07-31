// This file was automatically generated. DO NOT MODIFY DIRECTLY.
import { PublicKey } from "@solana/web3.js"
import { Initialize } from "./initialize"
import { InitializeWithValues } from "./initializeWithValues"
import { InitializeWithValues2 } from "./initializeWithValues2"
import { CauseError } from "./causeError"

export * from "./initialize"
export type { InitializeAccounts } from "./initialize"
export * from "./initializeWithValues"
export type {
  InitializeWithValuesArgs,
  InitializeWithValuesAccounts,
} from "./initializeWithValues"
export * from "./initializeWithValues2"
export type {
  InitializeWithValues2Args,
  InitializeWithValues2Accounts,
} from "./initializeWithValues2"
export * from "./causeError"

export enum ExampleProgramInstructionNames {
  initialize = "initialize",
  initializeWithValues = "initializeWithValues",
  initializeWithValues2 = "initializeWithValues2",
  causeError = "causeError",
}

export interface InstructionHandler {
  initializeIxHandler(ix: Initialize): Promise<void>
  initializeWithValuesIxHandler(ix: InitializeWithValues): Promise<void>
  initializeWithValues2IxHandler(ix: InitializeWithValues2): Promise<void>
  causeErrorIxHandler(ix: CauseError): Promise<void>
}

export async function processInstruction(
  ixData: Uint8Array,
  accounts: PublicKey[],
  instructionHandler: InstructionHandler
): Promise<void> {
  const identifier = Buffer.from(ixData.slice(0, 8))
  if (Initialize.isIdentifierEqual(identifier)) {
    const decodedIx = Initialize.decode(accounts)
    await instructionHandler.initializeIxHandler(decodedIx)
  }
  if (InitializeWithValues.isIdentifierEqual(identifier)) {
    const decodedIx = InitializeWithValues.decode(ixData, accounts)
    await instructionHandler.initializeWithValuesIxHandler(decodedIx)
  }
  if (InitializeWithValues2.isIdentifierEqual(identifier)) {
    const decodedIx = InitializeWithValues2.decode(ixData, accounts)
    await instructionHandler.initializeWithValues2IxHandler(decodedIx)
  }
  if (CauseError.isIdentifierEqual(identifier)) {
    const decodedIx = CauseError.decode()
    await instructionHandler.causeErrorIxHandler(decodedIx)
  }
}
