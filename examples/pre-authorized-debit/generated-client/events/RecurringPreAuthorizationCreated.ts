// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface RecurringPreAuthorizationCreatedEvent {
  data: types.PreAuthorizationCreatedEventDataFields
}

export interface RecurringPreAuthorizationCreatedEventJSON {
  data: types.PreAuthorizationCreatedEventDataJSON
}

export class RecurringPreAuthorizationCreated {
  readonly data: RecurringPreAuthorizationCreatedEvent

  static readonly discriminator = Buffer.from([
    131, 243, 208, 39, 49, 184, 179, 195,
  ])

  static readonly layout = borsh.struct([
    types.PreAuthorizationCreatedEventData.layout("data"),
  ])

  constructor(eventData: RecurringPreAuthorizationCreatedEvent) {
    this.data = {
      data: new types.PreAuthorizationCreatedEventData({ ...eventData.data }),
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data
      .subarray(0, 8)
      .equals(RecurringPreAuthorizationCreated.discriminator)
  }

  static decode(data: Buffer): RecurringPreAuthorizationCreated {
    if (!RecurringPreAuthorizationCreated.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = RecurringPreAuthorizationCreated.layout.decode(data.subarray(8))

    return new RecurringPreAuthorizationCreated({
      data: types.PreAuthorizationCreatedEventData.fromDecoded(dec.data),
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<RecurringPreAuthorizationCreated> {
    const events: RecurringPreAuthorizationCreated[] = []
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
          const event = RecurringPreAuthorizationCreated.decode(
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
    data: RecurringPreAuthorizationCreatedEvent
  ): RecurringPreAuthorizationCreatedEventJSON {
    // convert fields to classes if needed
    const event = {
      data: new types.PreAuthorizationCreatedEventData({ ...data.data }),
    }
    return {
      data: event.data.toJSON(),
    }
  }

  toJSON(): RecurringPreAuthorizationCreatedEventJSON {
    return RecurringPreAuthorizationCreated.toJSON(this.data)
  }

  static fromJSON(
    obj: RecurringPreAuthorizationCreatedEventJSON
  ): RecurringPreAuthorizationCreated {
    return new RecurringPreAuthorizationCreated({
      data: types.PreAuthorizationCreatedEventData.fromJSON(obj.data),
    })
  }
}
