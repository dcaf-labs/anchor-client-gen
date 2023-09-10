// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface PreAuthorizationUnpausedEvent {
  data: types.PausePreAuthorizationEventDataFields
}

export interface PreAuthorizationUnpausedEventJSON {
  data: types.PausePreAuthorizationEventDataJSON
}

export class PreAuthorizationUnpaused {
  readonly data: PreAuthorizationUnpausedEvent

  static readonly discriminator = Buffer.from([8, 81, 96, 87, 92, 44, 191, 189])

  static readonly layout = borsh.struct([
    types.PausePreAuthorizationEventData.layout("data"),
  ])

  constructor(eventData: PreAuthorizationUnpausedEvent) {
    this.data = {
      data: new types.PausePreAuthorizationEventData({ ...eventData.data }),
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(PreAuthorizationUnpaused.discriminator)
  }

  static decode(data: Buffer): PreAuthorizationUnpaused {
    if (!PreAuthorizationUnpaused.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = PreAuthorizationUnpaused.layout.decode(data.subarray(8))

    return new PreAuthorizationUnpaused({
      data: types.PausePreAuthorizationEventData.fromDecoded(dec.data),
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<PreAuthorizationUnpaused> {
    const events: PreAuthorizationUnpaused[] = []
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
          const event = PreAuthorizationUnpaused.decode(
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
    data: PreAuthorizationUnpausedEvent
  ): PreAuthorizationUnpausedEventJSON {
    // convert fields to classes if needed
    const event = {
      data: new types.PausePreAuthorizationEventData({ ...data.data }),
    }
    return {
      data: event.data.toJSON(),
    }
  }

  toJSON(): PreAuthorizationUnpausedEventJSON {
    return PreAuthorizationUnpaused.toJSON(this.data)
  }

  static fromJSON(
    obj: PreAuthorizationUnpausedEventJSON
  ): PreAuthorizationUnpaused {
    return new PreAuthorizationUnpaused({
      data: types.PausePreAuthorizationEventData.fromJSON(obj.data),
    })
  }
}
