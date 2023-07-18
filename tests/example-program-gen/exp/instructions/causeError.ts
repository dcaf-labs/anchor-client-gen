// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"
import { PROGRAM_ID } from "../programId"

export class CauseError {
  static readonly ixName = "causeError"
  readonly identifier: Buffer
  readonly keys: Array<AccountMeta>

  constructor(readonly programId: PublicKey = PROGRAM_ID) {
    this.identifier = Buffer.from([67, 104, 37, 17, 2, 155, 68, 17])
    this.keys = []
  }

  static fromDecoded() {
    return new CauseError()
  }
}
