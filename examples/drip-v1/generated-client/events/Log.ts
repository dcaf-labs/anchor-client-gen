// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import * as base64 from "base64-js"
import { PublicKey, Connection, GetAccountInfoConfig } from "@solana/web3.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"

export interface LogEvent {
  data: bigint | null
  message: string
}

export interface LogEventJSON {
  data: string | null
  message: string
}

export class Log {
  readonly data: LogEvent

  static readonly discriminator = Buffer.from([
    221, 78, 32, 86, 187, 209, 93, 104,
  ])

  static readonly layout = borsh.struct([
    borsh.option(borsh.u64(), "data"),
    borsh.str("message"),
  ])

  constructor(eventData: LogEvent) {
    this.data = {
      data: eventData.data,
      message: eventData.message,
    }
  }

  static isDiscriminatorEqual(data: Buffer): boolean {
    return data.subarray(0, 8).equals(Log.discriminator)
  }

  static decode(data: Buffer): Log {
    if (!Log.isDiscriminatorEqual(data)) {
      throw new Error("Invalid event discriminator.")
    }

    const dec = Log.layout.decode(data.subarray(8))

    return new Log({
      data: dec.data,
      message: dec.message,
    })
  }

  static *parseLogs(
    logs: string[],
    programId: PublicKey,
    errorOnDecodeFailure: boolean = false
  ): IterableIterator<Log> {
    const events: Log[] = []
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
          const event = Log.decode(
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

  static toJSON(data: LogEvent): LogEventJSON {
    // convert fields to classes if needed
    const event = {
      data: data.data,
      message: data.message,
    }
    return {
      data: (event.data && event.data.toString()) || null,
      message: event.message,
    }
  }

  toJSON(): LogEventJSON {
    return Log.toJSON(this.data)
  }

  static fromJSON(obj: LogEventJSON): Log {
    return new Log({
      data: (obj.data && BigInt(obj.data)) || null,
      message: obj.message,
    })
  }
}
