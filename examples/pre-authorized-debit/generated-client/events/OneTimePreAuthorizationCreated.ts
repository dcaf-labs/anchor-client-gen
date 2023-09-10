// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface OneTimePreAuthorizationCreatedEvent {
  data: types.PreAuthorizationCreatedEventDataFields
}

export interface OneTimePreAuthorizationCreatedEventJSON {
  data: types.PreAuthorizationCreatedEventDataJSON
}

export class OneTimePreAuthorizationCreated {
  readonly data: OneTimePreAuthorizationCreatedEvent

  static readonly discriminator = Buffer.from([
    83, 226, 207, 27, 96, 101, 142, 162,
  ])

  static readonly layout = borsh.struct([
    types.PreAuthorizationCreatedEventData.layout("data"),
  ])

  constructor(eventData: OneTimePreAuthorizationCreatedEvent) {
    this.data = {
      data: new types.PreAuthorizationCreatedEventData({ ...eventData.data }),
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data
      .subarray(0, 8)
      .equals(OneTimePreAuthorizationCreated.discriminator)
  }

  static decode(data: Buffer): OneTimePreAuthorizationCreated {
    if (!OneTimePreAuthorizationCreated.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = OneTimePreAuthorizationCreated.layout.decode(data.subarray(8))

    return new OneTimePreAuthorizationCreated({
      data: types.PreAuthorizationCreatedEventData.fromDecoded(dec.data),
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<OneTimePreAuthorizationCreated> {
    const events: OneTimePreAuthorizationCreated[] = []
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
          const event = OneTimePreAuthorizationCreated.decode(
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
    data: OneTimePreAuthorizationCreatedEvent
  ): OneTimePreAuthorizationCreatedEventJSON {
    // convert fields to classes if needed
    const event = {
      data: new types.PreAuthorizationCreatedEventData({ ...data.data }),
    }
    return {
      data: event.data.toJSON(),
    }
  }

  toJSON(): OneTimePreAuthorizationCreatedEventJSON {
    return OneTimePreAuthorizationCreated.toJSON(this.data)
  }

  static fromJSON(
    obj: OneTimePreAuthorizationCreatedEventJSON
  ): OneTimePreAuthorizationCreated {
    return new OneTimePreAuthorizationCreated({
      data: types.PreAuthorizationCreatedEventData.fromJSON(obj.data),
    })
  }
}
