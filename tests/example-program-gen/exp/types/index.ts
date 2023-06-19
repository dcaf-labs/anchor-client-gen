import * as FooEnum from "./FooEnum"

// This file was automatically generated. DO NOT MODIFY DIRECTLY.
export { BarStruct } from "./BarStruct"
export type { BarStructFields, BarStructJSON } from "./BarStruct"
export { FooStruct } from "./FooStruct"
export type { FooStructFields, FooStructJSON } from "./FooStruct"
export { FooEnum }

/** Enum type */
export type FooEnumKind =
  | FooEnum.Unnamed
  | FooEnum.UnnamedSingle
  | FooEnum.Named
  | FooEnum.Struct
  | FooEnum.OptionStruct
  | FooEnum.VecStruct
  | FooEnum.NoFields
export type FooEnumJSON =
  | FooEnum.UnnamedJSON
  | FooEnum.UnnamedSingleJSON
  | FooEnum.NamedJSON
  | FooEnum.StructJSON
  | FooEnum.OptionStructJSON
  | FooEnum.VecStructJSON
  | FooEnum.NoFieldsJSON
