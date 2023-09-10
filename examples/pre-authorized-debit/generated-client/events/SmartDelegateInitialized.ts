// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface SmartDelegateInitializedEvent {
  payer: PublicKey
  smartDelegate: PublicKey
}

export interface SmartDelegateInitializedEventJSON {
  payer: string
  smartDelegate: string
}

export class SmartDelegateInitialized {
  readonly data: SmartDelegateInitializedEvent

  static readonly discriminator = Buffer.from([
    136, 72, 57, 213, 203, 214, 232, 114,
  ])

  static readonly layout = borsh.struct([
    borsh.publicKey("payer"),
    borsh.publicKey("smartDelegate"),
  ])

  constructor(eventData: SmartDelegateInitializedEvent) {
    this.data = {
      payer: eventData.payer,
      smartDelegate: eventData.smartDelegate,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(SmartDelegateInitialized.discriminator)
  }

  static decode(data: Buffer): SmartDelegateInitialized {
    if (!SmartDelegateInitialized.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = SmartDelegateInitialized.layout.decode(data.subarray(8))

    return new SmartDelegateInitialized({
      payer: dec.payer,
      smartDelegate: dec.smartDelegate,
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<SmartDelegateInitialized> {
    const events: SmartDelegateInitialized[] = []
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
          const event = SmartDelegateInitialized.decode(
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

  static toJSON(
    data: SmartDelegateInitializedEvent
  ): SmartDelegateInitializedEventJSON {
    // convert fields to classes if needed
    const event = {
      payer: data.payer,
      smartDelegate: data.smartDelegate,
    }
    return {
      payer: event.payer.toString(),
      smartDelegate: event.smartDelegate.toString(),
    }
  }

  toJSON(): SmartDelegateInitializedEventJSON {
    return SmartDelegateInitialized.toJSON(this.data)
  }

  static fromJSON(
    obj: SmartDelegateInitializedEventJSON
  ): SmartDelegateInitialized {
    return new SmartDelegateInitialized({
      payer: new PublicKey(obj.payer),
      smartDelegate: new PublicKey(obj.smartDelegate),
    })
  }
}
