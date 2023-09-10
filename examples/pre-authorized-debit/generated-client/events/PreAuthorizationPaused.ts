// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface PreAuthorizationPausedEvent {
  data: types.PausePreAuthorizationEventDataFields
}

export interface PreAuthorizationPausedEventJSON {
  data: types.PausePreAuthorizationEventDataJSON
}

export class PreAuthorizationPaused {
  readonly data: PreAuthorizationPausedEvent

  static readonly discriminator = Buffer.from([
    46, 188, 211, 88, 247, 195, 188, 147,
  ])

  static readonly layout = borsh.struct([
    types.PausePreAuthorizationEventData.layout("data"),
  ])

  constructor(eventData: PreAuthorizationPausedEvent) {
    this.data = {
      data: new types.PausePreAuthorizationEventData({ ...eventData.data }),
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(PreAuthorizationPaused.discriminator)
  }

  static decode(data: Buffer): PreAuthorizationPaused {
    if (!PreAuthorizationPaused.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = PreAuthorizationPaused.layout.decode(data.subarray(8))

    return new PreAuthorizationPaused({
      data: types.PausePreAuthorizationEventData.fromDecoded(dec.data),
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<PreAuthorizationPaused> {
    const events: PreAuthorizationPaused[] = []
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
          const event = PreAuthorizationPaused.decode(
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
    data: PreAuthorizationPausedEvent
  ): PreAuthorizationPausedEventJSON {
    // convert fields to classes if needed
    const event = {
      data: new types.PausePreAuthorizationEventData({ ...data.data }),
    }
    return {
      data: event.data.toJSON(),
    }
  }

  toJSON(): PreAuthorizationPausedEventJSON {
    return PreAuthorizationPaused.toJSON(this.data)
  }

  static fromJSON(
    obj: PreAuthorizationPausedEventJSON
  ): PreAuthorizationPaused {
    return new PreAuthorizationPaused({
      data: types.PausePreAuthorizationEventData.fromJSON(obj.data),
    })
  }
}
