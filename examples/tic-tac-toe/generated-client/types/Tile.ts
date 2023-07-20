// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey } from "@solana/web3.js"
import BN from "bn.js"
import * as types from "../types"
import * as borsh from "@coral-xyz/borsh"

export interface TileFields {
  row: number
  column: number
}

export interface TileJSON {
  row: number
  column: number
}

export class Tile {
  readonly row: number
  readonly column: number

  constructor(fields: TileFields) {
    this.row = fields.row
    this.column = fields.column
  }

  static layout(property?: string) {
    return borsh.struct([borsh.u8("row"), borsh.u8("column")], property)
  }

  static fromDecoded(obj: any) {
    return new Tile({
      row: obj.row,
      column: obj.column,
    })
  }

  static toEncodable(fields: TileFields) {
    return {
      row: fields.row,
      column: fields.column,
    }
  }

  toEncodable() {
    return Tile.toEncodable(this)
  }

  toJSON(): TileJSON {
    return {
      row: this.row,
      column: this.column,
    }
  }

  static fromJSON(obj: TileJSON): Tile {
    return new Tile({
      row: obj.row,
      column: obj.column,
    })
  }
}
