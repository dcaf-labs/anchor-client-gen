// This file was automatically generated. DO NOT MODIFY DIRECTLY.
/* eslint-disable */
import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@coral-xyz/borsh"
import * as types from "../types"
import { PROGRAM_ID } from "../programId"
// SetupGameFields are raw anchor decoded values
export interface SetupGameFields {
  playerTwo: PublicKey
}
// SetupGameArgs convert properties to type classes if available. This is used for converting to JSON
export interface SetupGameArgs {
  playerTwo: PublicKey
}

export interface SetupGameFieldsJSON {
  playerTwo: string
}

export interface SetupGameAccounts {
  game: PublicKey
  playerOne: PublicKey
  systemProgram: PublicKey
}

export interface SetupGameAccountsJSON {
  game: string
  playerOne: string
  systemProgram: string
}

const layout = borsh.struct([borsh.publicKey("playerTwo")])

export class SetupGame {
  static readonly ixName = "setupGame"
  readonly identifier: Buffer
  readonly keys: Array<AccountMeta>
  readonly args: SetupGameArgs

  constructor(
    readonly fields: SetupGameFields,
    readonly accounts: SetupGameAccounts,
    readonly programId: PublicKey = PROGRAM_ID
  ) {
    this.identifier = Buffer.from([180, 218, 128, 75, 58, 222, 35, 82])
    this.keys = [
      { pubkey: this.accounts.game, isSigner: true, isWritable: true },
      { pubkey: this.accounts.playerOne, isSigner: true, isWritable: true },
      {
        pubkey: this.accounts.systemProgram,
        isSigner: false,
        isWritable: false,
      },
    ]
    this.args = {
      playerTwo: fields.playerTwo,
    }
  }

  static fromDecoded(fields: SetupGameFields, flattenedAccounts: PublicKey[]) {
    const accounts = {
      game: flattenedAccounts[0],
      playerOne: flattenedAccounts[1],
      systemProgram: flattenedAccounts[2],
    }
    return new SetupGame(fields, accounts)
  }

  toArgsJSON(): SetupGameFieldsJSON {
    return {
      playerTwo: this.args.playerTwo.toString(),
    }
  }

  toAccountsJSON(): SetupGameAccountsJSON {
    return {
      game: this.accounts.game.toString(),
      playerOne: this.accounts.playerOne.toString(),
      systemProgram: this.accounts.systemProgram.toString(),
    }
  }
}
