// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { PublicKey } from "@solana/web3.js"
import BN from "bn.js"
import * as types from "../types"
import * as borsh from "@coral-xyz/borsh"

export interface ActiveJSON {
  kind: "Active"
}

export class Active {
  static readonly discriminator = 0
  static readonly kind = "Active"
  readonly discriminator = 0
  readonly kind = "Active"

  toJSON(): ActiveJSON {
    return {
      kind: "Active",
    }
  }

  toEncodable() {
    return {
      Active: {},
    }
  }
}

export interface TieJSON {
  kind: "Tie"
}

export class Tie {
  static readonly discriminator = 1
  static readonly kind = "Tie"
  readonly discriminator = 1
  readonly kind = "Tie"

  toJSON(): TieJSON {
    return {
      kind: "Tie",
    }
  }

  toEncodable() {
    return {
      Tie: {},
    }
  }
}

export type WonFields = {
  winner: PublicKey
}
export type WonValue = {
  winner: PublicKey
}

export interface WonJSON {
  kind: "Won"
  value: {
    winner: string
  }
}

export class Won {
  static readonly discriminator = 2
  static readonly kind = "Won"
  readonly discriminator = 2
  readonly kind = "Won"
  readonly value: WonValue

  constructor(value: WonFields) {
    this.value = {
      winner: value.winner,
    }
  }

  toJSON(): WonJSON {
    return {
      kind: "Won",
      value: {
        winner: this.value.winner.toString(),
      },
    }
  }

  toEncodable() {
    return {
      Won: {
        winner: this.value.winner,
      },
    }
  }
}

export function fromDecoded(obj: any): types.GameStateKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Active" in obj) {
    return new Active()
  }
  if ("Tie" in obj) {
    return new Tie()
  }
  if ("Won" in obj) {
    const val = obj["Won"]
    return new Won({
      winner: val["winner"],
    })
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.GameStateJSON): types.GameStateKind {
  switch (obj.kind) {
    case "Active": {
      return new Active()
    }
    case "Tie": {
      return new Tie()
    }
    case "Won": {
      return new Won({
        winner: new PublicKey(obj.value.winner),
      })
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "Active"),
    borsh.struct([], "Tie"),
    borsh.struct([borsh.publicKey("winner")], "Won"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
