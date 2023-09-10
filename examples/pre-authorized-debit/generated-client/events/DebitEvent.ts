// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface DebitEventEvent {
  preAuthorization: PublicKey
  smartDelegate: PublicKey
  mint: PublicKey
  tokenProgram: PublicKey
  sourceTokenAccountOwner: PublicKey
  destinationTokenAccountOwner: PublicKey
  sourceTokenAccount: PublicKey
  destinationTokenAccount: PublicKey
  debitAuthorizationType: types.DebitAuthorizationTypeKind
}

export interface DebitEventEventJSON {
  preAuthorization: string
  smartDelegate: string
  mint: string
  tokenProgram: string
  sourceTokenAccountOwner: string
  destinationTokenAccountOwner: string
  sourceTokenAccount: string
  destinationTokenAccount: string
  debitAuthorizationType: types.DebitAuthorizationTypeJSON
}

export class DebitEvent {
  readonly data: DebitEventEvent

  static readonly discriminator = Buffer.from([
    2, 198, 88, 210, 93, 229, 139, 189,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("preAuthorization"),
    borsh.publicKey("smartDelegate"),
    borsh.publicKey("mint"),
    borsh.publicKey("tokenProgram"),
    borsh.publicKey("sourceTokenAccountOwner"),
    borsh.publicKey("destinationTokenAccountOwner"),
    borsh.publicKey("sourceTokenAccount"),
    borsh.publicKey("destinationTokenAccount"),
    types.DebitAuthorizationType.layout("debitAuthorizationType"),
  ])

  constructor(eventData: DebitEventEvent) {
    this.data = {
      preAuthorization: eventData.preAuthorization,
      smartDelegate: eventData.smartDelegate,
      mint: eventData.mint,
      tokenProgram: eventData.tokenProgram,
      sourceTokenAccountOwner: eventData.sourceTokenAccountOwner,
      destinationTokenAccountOwner: eventData.destinationTokenAccountOwner,
      sourceTokenAccount: eventData.sourceTokenAccount,
      destinationTokenAccount: eventData.destinationTokenAccount,
      debitAuthorizationType: eventData.debitAuthorizationType,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(DebitEvent.discriminator)
  }

  static decode(data: Buffer): DebitEvent {
    if (!DebitEvent.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = DebitEvent.layout.decode(data.subarray(8))

    return new DebitEvent({
      preAuthorization: dec.preAuthorization,
      smartDelegate: dec.smartDelegate,
      mint: dec.mint,
      tokenProgram: dec.tokenProgram,
      sourceTokenAccountOwner: dec.sourceTokenAccountOwner,
      destinationTokenAccountOwner: dec.destinationTokenAccountOwner,
      sourceTokenAccount: dec.sourceTokenAccount,
      destinationTokenAccount: dec.destinationTokenAccount,
      debitAuthorizationType: types.DebitAuthorizationType.fromDecoded(
        dec.debitAuthorizationType
      ),
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<DebitEvent> {
    const events: DebitEvent[] = []
    let log = logs.pop()
    if (!log) {
      return
    }
    let currentProgramId: string = ""
    const programStartRe = /Program ([A-z0-9]+) invoke \[[0-9]+\]/
    const ixDataStart = /Program (log|data): (.+)/
    while (log) {
      if (programStartRe.test(log)) {
        currentProgramId = log.match(programStartRe)![1]
      } else if (
        currentProgramId === programId.toString() &&
        ixDataStart.test(log)
      ) {
        try {
          const eventDataStr = log.match(ixDataStart)![2]
          const event = DebitEvent.decode(
            Buffer.from(base64.toByteArray(eventDataStr))
          )
          yield event
        } catch (err) {
          if (errorOnDecodeFailure) {
            throw err
          }
        }
      }
      log = logs.pop()
    }
  }

  static toJSON(data: DebitEventEvent): DebitEventEventJSON {
    // convert fields to classes if needed
    const event = {
      preAuthorization: data.preAuthorization,
      smartDelegate: data.smartDelegate,
      mint: data.mint,
      tokenProgram: data.tokenProgram,
      sourceTokenAccountOwner: data.sourceTokenAccountOwner,
      destinationTokenAccountOwner: data.destinationTokenAccountOwner,
      sourceTokenAccount: data.sourceTokenAccount,
      destinationTokenAccount: data.destinationTokenAccount,
      debitAuthorizationType: data.debitAuthorizationType,
    }
    return {
      preAuthorization: event.preAuthorization.toString(),
      smartDelegate: event.smartDelegate.toString(),
      mint: event.mint.toString(),
      tokenProgram: event.tokenProgram.toString(),
      sourceTokenAccountOwner: event.sourceTokenAccountOwner.toString(),
      destinationTokenAccountOwner:
        event.destinationTokenAccountOwner.toString(),
      sourceTokenAccount: event.sourceTokenAccount.toString(),
      destinationTokenAccount: event.destinationTokenAccount.toString(),
      debitAuthorizationType: event.debitAuthorizationType.toJSON(),
    }
  }

  toJSON(): DebitEventEventJSON {
    return DebitEvent.toJSON(this.data)
  }

  static fromJSON(obj: DebitEventEventJSON): DebitEvent {
    return new DebitEvent({
      preAuthorization: new PublicKey(obj.preAuthorization),
      smartDelegate: new PublicKey(obj.smartDelegate),
      mint: new PublicKey(obj.mint),
      tokenProgram: new PublicKey(obj.tokenProgram),
      sourceTokenAccountOwner: new PublicKey(obj.sourceTokenAccountOwner),
      destinationTokenAccountOwner: new PublicKey(
        obj.destinationTokenAccountOwner
      ),
      sourceTokenAccount: new PublicKey(obj.sourceTokenAccount),
      destinationTokenAccount: new PublicKey(obj.destinationTokenAccount),
      debitAuthorizationType: types.DebitAuthorizationType.fromJSON(
        obj.debitAuthorizationType
      ),
    })
  }
}
