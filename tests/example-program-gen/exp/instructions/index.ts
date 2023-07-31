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

export interface InstructionHandler<T> {
  initializeIxHandler(ix: Initialize): Promise<T>
  initializeWithValuesIxHandler(ix: InitializeWithValues): Promise<T>
  initializeWithValues2IxHandler(ix: InitializeWithValues2): Promise<T>
  causeErrorIxHandler(ix: CauseError): Promise<T>
}

export async function processInstruction<T>(
  programId: PublicKey,
  ixData: Uint8Array,
  accounts: PublicKey[],
  instructionHandler: InstructionHandler<T>
): Promise<T | undefined> {
  const ixDataBuff = Buffer.from(ixData)
  if (Initialize.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = Initialize.decode(programId, accounts)
    return await instructionHandler.initializeIxHandler(decodedIx)
  }
  if (InitializeWithValues.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = InitializeWithValues.decode(
      programId,
      ixDataBuff,
      accounts
    )
    return await instructionHandler.initializeWithValuesIxHandler(decodedIx)
  }
  if (InitializeWithValues2.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = InitializeWithValues2.decode(
      programId,
      ixDataBuff,
      accounts
    )
    return await instructionHandler.initializeWithValues2IxHandler(decodedIx)
  }
  if (CauseError.isIdentifierEqual(ixDataBuff)) {
    const decodedIx = CauseError.decode(programId)
    return await instructionHandler.causeErrorIxHandler(decodedIx)
  }
  return undefined
}
