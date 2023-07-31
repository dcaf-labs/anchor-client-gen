// This file was automatically generated. DO NOT MODIFY DIRECTLY.
export type CustomError =
  | CannotGetPositionBump
  | CannotGetVaultBump
  | CannotGetVaultPeriodBump
  | DuplicateDripError
  | IncompleteSwapError
  | InvalidGranularity
  | InvalidMint
  | InvalidSpread
  | InvalidSwapAccount
  | InvalidNumSwaps
  | InvalidVaultProtoConfigReference
  | InvalidVaultPeriod
  | InvalidVaultReference
  | OnlyAdminCanInitVault
  | PeriodicDripAmountIsZero
  | PositionAlreadyClosed
  | WithdrawableAmountIsZero
  | CannotInitializeVaultPeriodLessThanVaultCurrentPeriod
  | InvalidVaultMaxSlippage
  | IncorrectSwapAmount
  | NumSwapsIsZero
  | SignerIsNotAdmin
  | IncorrectVaultTokenAccount
  | InvalidOwner
  | PositionBalanceIsZero
  | InvalidReferrer
  | CannotWithdrawAWithNonZeroDripAmount
  | VaultTokenAAccountIsEmpty

export class CannotGetPositionBump extends Error {
  static readonly code = 6000
  readonly code = 6000
  readonly name = "CannotGetPositionBump"
  readonly msg = "Cannot get position bump"

  constructor(readonly logs?: string[]) {
    super("6000: Cannot get position bump")
  }
}

export class CannotGetVaultBump extends Error {
  static readonly code = 6001
  readonly code = 6001
  readonly name = "CannotGetVaultBump"
  readonly msg = "Cannot get vault bump"

  constructor(readonly logs?: string[]) {
    super("6001: Cannot get vault bump")
  }
}

export class CannotGetVaultPeriodBump extends Error {
  static readonly code = 6002
  readonly code = 6002
  readonly name = "CannotGetVaultPeriodBump"
  readonly msg = "Cannot get vault_period bump"

  constructor(readonly logs?: string[]) {
    super("6002: Cannot get vault_period bump")
  }
}

export class DuplicateDripError extends Error {
  static readonly code = 6003
  readonly code = 6003
  readonly name = "DuplicateDripError"
  readonly msg = "Drip already triggered for the current period"

  constructor(readonly logs?: string[]) {
    super("6003: Drip already triggered for the current period")
  }
}

export class IncompleteSwapError extends Error {
  static readonly code = 6004
  readonly code = 6004
  readonly name = "IncompleteSwapError"
  readonly msg = "Swap did not complete, either received token_b is 0"

  constructor(readonly logs?: string[]) {
    super("6004: Swap did not complete, either received token_b is 0")
  }
}

export class InvalidGranularity extends Error {
  static readonly code = 6005
  readonly code = 6005
  readonly name = "InvalidGranularity"
  readonly msg = "Granularity must be an integer larger than 0"

  constructor(readonly logs?: string[]) {
    super("6005: Granularity must be an integer larger than 0")
  }
}

export class InvalidMint extends Error {
  static readonly code = 6006
  readonly code = 6006
  readonly name = "InvalidMint"
  readonly msg = "Token mint does not match expected value"

  constructor(readonly logs?: string[]) {
    super("6006: Token mint does not match expected value")
  }
}

export class InvalidSpread extends Error {
  static readonly code = 6007
  readonly code = 6007
  readonly name = "InvalidSpread"
  readonly msg = "Spread must be >=0 and <5000"

  constructor(readonly logs?: string[]) {
    super("6007: Spread must be >=0 and <5000")
  }
}

export class InvalidSwapAccount extends Error {
  static readonly code = 6008
  readonly code = 6008
  readonly name = "InvalidSwapAccount"
  readonly msg = "Token Swap is Not Whitelisted"

  constructor(readonly logs?: string[]) {
    super("6008: Token Swap is Not Whitelisted")
  }
}

export class InvalidNumSwaps extends Error {
  static readonly code = 6009
  readonly code = 6009
  readonly name = "InvalidNumSwaps"
  readonly msg = "A Vault May Whitelist a Maximum of 5 Swap Accounts"

  constructor(readonly logs?: string[]) {
    super("6009: A Vault May Whitelist a Maximum of 5 Swap Accounts")
  }
}

export class InvalidVaultProtoConfigReference extends Error {
  static readonly code = 6010
  readonly code = 6010
  readonly name = "InvalidVaultProtoConfigReference"
  readonly msg = "Provided account references the wrong vault-proto-config"

  constructor(readonly logs?: string[]) {
    super("6010: Provided account references the wrong vault-proto-config")
  }
}

export class InvalidVaultPeriod extends Error {
  static readonly code = 6011
  readonly code = 6011
  readonly name = "InvalidVaultPeriod"
  readonly msg = "Invalid vault-period"

  constructor(readonly logs?: string[]) {
    super("6011: Invalid vault-period")
  }
}

export class InvalidVaultReference extends Error {
  static readonly code = 6012
  readonly code = 6012
  readonly name = "InvalidVaultReference"
  readonly msg = "Provided account references the wrong vault"

  constructor(readonly logs?: string[]) {
    super("6012: Provided account references the wrong vault")
  }
}

export class OnlyAdminCanInitVault extends Error {
  static readonly code = 6013
  readonly code = 6013
  readonly name = "OnlyAdminCanInitVault"
  readonly msg = "Only admin can init vault"

  constructor(readonly logs?: string[]) {
    super("6013: Only admin can init vault")
  }
}

export class PeriodicDripAmountIsZero extends Error {
  static readonly code = 6014
  readonly code = 6014
  readonly name = "PeriodicDripAmountIsZero"
  readonly msg = "Periodic drip amount == 0"

  constructor(readonly logs?: string[]) {
    super("6014: Periodic drip amount == 0")
  }
}

export class PositionAlreadyClosed extends Error {
  static readonly code = 6015
  readonly code = 6015
  readonly name = "PositionAlreadyClosed"
  readonly msg = "Position is already closed"

  constructor(readonly logs?: string[]) {
    super("6015: Position is already closed")
  }
}

export class WithdrawableAmountIsZero extends Error {
  static readonly code = 6016
  readonly code = 6016
  readonly name = "WithdrawableAmountIsZero"
  readonly msg = "Withdrawable amount is zero"

  constructor(readonly logs?: string[]) {
    super("6016: Withdrawable amount is zero")
  }
}

export class CannotInitializeVaultPeriodLessThanVaultCurrentPeriod extends Error {
  static readonly code = 6017
  readonly code = 6017
  readonly name = "CannotInitializeVaultPeriodLessThanVaultCurrentPeriod"
  readonly msg =
    "Cannot initialize a vault period lesser than vault's current period"

  constructor(readonly logs?: string[]) {
    super(
      "6017: Cannot initialize a vault period lesser than vault's current period"
    )
  }
}

export class InvalidVaultMaxSlippage extends Error {
  static readonly code = 6018
  readonly code = 6018
  readonly name = "InvalidVaultMaxSlippage"
  readonly msg = "Invalid value for vault.max_slippage_bps"

  constructor(readonly logs?: string[]) {
    super("6018: Invalid value for vault.max_slippage_bps")
  }
}

export class IncorrectSwapAmount extends Error {
  static readonly code = 6019
  readonly code = 6019
  readonly name = "IncorrectSwapAmount"
  readonly msg = "Swapped the wrong amount during drip"

  constructor(readonly logs?: string[]) {
    super("6019: Swapped the wrong amount during drip")
  }
}

export class NumSwapsIsZero extends Error {
  static readonly code = 6020
  readonly code = 6020
  readonly name = "NumSwapsIsZero"
  readonly msg = "Number of swaps is zero"

  constructor(readonly logs?: string[]) {
    super("6020: Number of swaps is zero")
  }
}

export class SignerIsNotAdmin extends Error {
  static readonly code = 6021
  readonly code = 6021
  readonly name = "SignerIsNotAdmin"
  readonly msg = "Signer is not admin"

  constructor(readonly logs?: string[]) {
    super("6021: Signer is not admin")
  }
}

export class IncorrectVaultTokenAccount extends Error {
  static readonly code = 6022
  readonly code = 6022
  readonly name = "IncorrectVaultTokenAccount"
  readonly msg = "Incorrect vault token account passed in"

  constructor(readonly logs?: string[]) {
    super("6022: Incorrect vault token account passed in")
  }
}

export class InvalidOwner extends Error {
  static readonly code = 6023
  readonly code = 6023
  readonly name = "InvalidOwner"
  readonly msg = "Account is owned by the wrong account"

  constructor(readonly logs?: string[]) {
    super("6023: Account is owned by the wrong account")
  }
}

export class PositionBalanceIsZero extends Error {
  static readonly code = 6024
  readonly code = 6024
  readonly name = "PositionBalanceIsZero"
  readonly msg = "Position token account balance is empty"

  constructor(readonly logs?: string[]) {
    super("6024: Position token account balance is empty")
  }
}

export class InvalidReferrer extends Error {
  static readonly code = 6025
  readonly code = 6025
  readonly name = "InvalidReferrer"
  readonly msg = "Referrer does not match position referrer"

  constructor(readonly logs?: string[]) {
    super("6025: Referrer does not match position referrer")
  }
}

export class CannotWithdrawAWithNonZeroDripAmount extends Error {
  static readonly code = 6026
  readonly code = 6026
  readonly name = "CannotWithdrawAWithNonZeroDripAmount"
  readonly msg = "Admin cannot withdraw A if drip amount is non-zero"

  constructor(readonly logs?: string[]) {
    super("6026: Admin cannot withdraw A if drip amount is non-zero")
  }
}

export class VaultTokenAAccountIsEmpty extends Error {
  static readonly code = 6027
  readonly code = 6027
  readonly name = "VaultTokenAAccountIsEmpty"
  readonly msg = "Vault Token A Account is empty"

  constructor(readonly logs?: string[]) {
    super("6027: Vault Token A Account is empty")
  }
}

export function fromCode(code: number, logs?: string[]): CustomError | null {
  switch (code) {
    case 6000:
      return new CannotGetPositionBump(logs)
    case 6001:
      return new CannotGetVaultBump(logs)
    case 6002:
      return new CannotGetVaultPeriodBump(logs)
    case 6003:
      return new DuplicateDripError(logs)
    case 6004:
      return new IncompleteSwapError(logs)
    case 6005:
      return new InvalidGranularity(logs)
    case 6006:
      return new InvalidMint(logs)
    case 6007:
      return new InvalidSpread(logs)
    case 6008:
      return new InvalidSwapAccount(logs)
    case 6009:
      return new InvalidNumSwaps(logs)
    case 6010:
      return new InvalidVaultProtoConfigReference(logs)
    case 6011:
      return new InvalidVaultPeriod(logs)
    case 6012:
      return new InvalidVaultReference(logs)
    case 6013:
      return new OnlyAdminCanInitVault(logs)
    case 6014:
      return new PeriodicDripAmountIsZero(logs)
    case 6015:
      return new PositionAlreadyClosed(logs)
    case 6016:
      return new WithdrawableAmountIsZero(logs)
    case 6017:
      return new CannotInitializeVaultPeriodLessThanVaultCurrentPeriod(logs)
    case 6018:
      return new InvalidVaultMaxSlippage(logs)
    case 6019:
      return new IncorrectSwapAmount(logs)
    case 6020:
      return new NumSwapsIsZero(logs)
    case 6021:
      return new SignerIsNotAdmin(logs)
    case 6022:
      return new IncorrectVaultTokenAccount(logs)
    case 6023:
      return new InvalidOwner(logs)
    case 6024:
      return new PositionBalanceIsZero(logs)
    case 6025:
      return new InvalidReferrer(logs)
    case 6026:
      return new CannotWithdrawAWithNonZeroDripAmount(logs)
    case 6027:
      return new VaultTokenAAccountIsEmpty(logs)
  }

  return null
}
