// This file was automatically generated. DO NOT MODIFY DIRECTLY.
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
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

  build() {
    const data = this.identifier
    const ix = new TransactionInstruction({
      keys: this.keys,
      programId: this.programId,
      data,
    })
    return ix
  }
}
