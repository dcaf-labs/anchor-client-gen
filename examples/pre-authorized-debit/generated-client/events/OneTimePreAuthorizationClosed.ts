// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface OneTimePreAuthorizationClosedEvent {
  data: types.PreAuthorizationClosedEventDataFields
}

export interface OneTimePreAuthorizationClosedEventJSON {
  data: types.PreAuthorizationClosedEventDataJSON
}

export class OneTimePreAuthorizationClosed {
  readonly data: OneTimePreAuthorizationClosedEvent

  static readonly discriminator = Buffer.from([
    168, 192, 106, 27, 114, 240, 149, 162,
  ])

  static readonly layout = borsh.struct([
    types.PreAuthorizationClosedEventData.layout("data"),
  ])

  constructor(eventData: OneTimePreAuthorizationClosedEvent) {
    this.data = {
      data: new types.PreAuthorizationClosedEventData({ ...eventData.data }),
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data
      .subarray(0, 8)
      .equals(OneTimePreAuthorizationClosed.discriminator)
  }

  static decode(data: Buffer): OneTimePreAuthorizationClosed {
    if (!OneTimePreAuthorizationClosed.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = OneTimePreAuthorizationClosed.layout.decode(data.subarray(8))

    return new OneTimePreAuthorizationClosed({
      data: types.PreAuthorizationClosedEventData.fromDecoded(dec.data),
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<OneTimePreAuthorizationClosed> {
    const events: OneTimePreAuthorizationClosed[] = []
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
          const event = OneTimePreAuthorizationClosed.decode(
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
    data: OneTimePreAuthorizationClosedEvent
  ): OneTimePreAuthorizationClosedEventJSON {
    // convert fields to classes if needed
    const event = {
      data: new types.PreAuthorizationClosedEventData({ ...data.data }),
    }
    return {
      data: event.data.toJSON(),
    }
  }

  toJSON(): OneTimePreAuthorizationClosedEventJSON {
    return OneTimePreAuthorizationClosed.toJSON(this.data)
  }

  static fromJSON(
    obj: OneTimePreAuthorizationClosedEventJSON
  ): OneTimePreAuthorizationClosed {
    return new OneTimePreAuthorizationClosed({
      data: types.PreAuthorizationClosedEventData.fromJSON(obj.data),
    })
  }
}
