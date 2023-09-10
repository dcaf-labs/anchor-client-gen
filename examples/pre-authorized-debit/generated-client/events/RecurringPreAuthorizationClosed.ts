// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface RecurringPreAuthorizationClosedEvent {
  data: types.PreAuthorizationClosedEventDataFields
}

export interface RecurringPreAuthorizationClosedEventJSON {
  data: types.PreAuthorizationClosedEventDataJSON
}

export class RecurringPreAuthorizationClosed {
  readonly data: RecurringPreAuthorizationClosedEvent

  static readonly discriminator = Buffer.from([
    215, 162, 236, 18, 248, 148, 84, 47,
  ])

  static readonly layout = borsh.struct([
    types.PreAuthorizationClosedEventData.layout("data"),
  ])

  constructor(eventData: RecurringPreAuthorizationClosedEvent) {
    this.data = {
      data: new types.PreAuthorizationClosedEventData({ ...eventData.data }),
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data
      .subarray(0, 8)
      .equals(RecurringPreAuthorizationClosed.discriminator)
  }

  static decode(data: Buffer): RecurringPreAuthorizationClosed {
    if (!RecurringPreAuthorizationClosed.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = RecurringPreAuthorizationClosed.layout.decode(data.subarray(8))

    return new RecurringPreAuthorizationClosed({
      data: types.PreAuthorizationClosedEventData.fromDecoded(dec.data),
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<RecurringPreAuthorizationClosed> {
    const events: RecurringPreAuthorizationClosed[] = []
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
          const event = RecurringPreAuthorizationClosed.decode(
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
    data: RecurringPreAuthorizationClosedEvent
  ): RecurringPreAuthorizationClosedEventJSON {
    // convert fields to classes if needed
    const event = {
      data: new types.PreAuthorizationClosedEventData({ ...data.data }),
    }
    return {
      data: event.data.toJSON(),
    }
  }

  toJSON(): RecurringPreAuthorizationClosedEventJSON {
    return RecurringPreAuthorizationClosed.toJSON(this.data)
  }

  static fromJSON(
    obj: RecurringPreAuthorizationClosedEventJSON
  ): RecurringPreAuthorizationClosed {
    return new RecurringPreAuthorizationClosed({
      data: types.PreAuthorizationClosedEventData.fromJSON(obj.data),
    })
  }
}
