import { ErrorCode } from "@/shared/system-types";
export type ApiSuccessResponse<T> = {
  status: number;
  message?: string;
  data?: T;
  dataCount?: number;
};

export type ApiBadResponse = {
  status: number;
  message: string;
  errorCode: keyof ErrorCode;
};

export type ServiceResponse<T> = {
  data?: T;
  dataCount?: number;
  errorMessage?: string;
};
