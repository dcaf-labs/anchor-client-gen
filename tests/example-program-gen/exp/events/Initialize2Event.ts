// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface Initialize2EventEvent {
  payer: PublicKey
}

export interface Initialize2EventEventJSON {
  payer: string
}

export class Initialize2Event {
  readonly data: Initialize2EventEvent

  static readonly discriminator = Buffer.from([
    82, 50, 154, 82, 111, 7, 130, 39,
  ])

  static readonly layout = borsh.struct([borsh.publicKey("payer")])

  constructor(eventData: Initialize2EventEvent) {
    this.data = {
      payer: eventData.payer,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(Initialize2Event.discriminator)
  }

  static decode(data: Buffer): Initialize2Event {
    if (!Initialize2Event.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = Initialize2Event.layout.decode(data.subarray(8))

    return new Initialize2Event({
      payer: dec.payer,
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<Initialize2Event> {
    const events: Initialize2Event[] = []
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
          const event = Initialize2Event.decode(
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

  static toJSON(data: Initialize2EventEvent): Initialize2EventEventJSON {
    // convert fields to classes if needed
    const event = {
      payer: data.payer,
    }
    return {
      payer: event.payer.toString(),
    }
  }

  toJSON(): Initialize2EventEventJSON {
    return Initialize2Event.toJSON(this.data)
  }

  static fromJSON(obj: Initialize2EventEventJSON): Initialize2Event {
    return new Initialize2Event({
      payer: new PublicKey(obj.payer),
    })
  }
}
