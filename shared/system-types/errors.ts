export type ErrorCode =
  | "EMPTY_FIELD"
  | "NEGATIVE_VALUE"
  | "OUT_OF_RANGE_VALUE"
  | "INVALID_CHARACTER";

export const ERROR_MESSAGE: Record<ErrorCode, string> = {
  EMPTY_FIELD: "The field cannot be left empty.",
  NEGATIVE_VALUE: "The value cannot be negative.",
  OUT_OF_RANGE_VALUE: "The value is out of the allowed range.",
  INVALID_CHARACTER: "The input contains invalid characters.",
} as const;
