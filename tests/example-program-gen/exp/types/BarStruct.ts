// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey } from "@solana/web3.js"
import BN from "bn.js"
import * as types from "../types"
import * as borsh from "@coral-xyz/borsh"

export interface BarStructFields {
  /** Some field */
  someField: boolean
  otherField: number
}

export interface BarStructJSON {
  /** Some field */
  someField: boolean
  otherField: number
}

/** Bar struct type */
export class BarStruct {
  /** Some field */
  readonly someField: boolean
  readonly otherField: number

  constructor(fields: BarStructFields) {
    this.someField = fields.someField
    this.otherField = fields.otherField
  }

  static layout(property?: string) {
    return borsh.struct(
      [borsh.bool("someField"), borsh.u8("otherField")],
      property
    )
  }

  static fromDecoded(obj: any) {
    return new BarStruct({
      someField: obj.someField,
      otherField: obj.otherField,
    })
  }

  static toEncodable(fields: BarStructFields) {
    return {
      someField: fields.someField,
      otherField: fields.otherField,
    }
  }

  toJSON(): BarStructJSON {
    return {
      someField: this.someField,
      otherField: this.otherField,
    }
  }

  static fromJSON(obj: BarStructJSON): BarStruct {
    return new BarStruct({
      someField: obj.someField,
      otherField: obj.otherField,
    })
  }

  toEncodable() {
    return BarStruct.toEncodable(this)
  }
}
