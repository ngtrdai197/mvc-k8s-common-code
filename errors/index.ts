export interface IError {
  message: string;
  field?: string;
}

interface ICustomError {
  statusCode: number;
  serializeErrors(): IError[];
}

export abstract class CustomError extends Error implements ICustomError {
  public abstract statusCode: number;
  public abstract serializeErrors(): IError[];

  constructor(protected readonly msg: string) {
    super(msg);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export * from "./database.error";
export * from "./bad-request.error";
export * from "./conflict-request.error";
export * from "./not-found.error";
export * from "./request-validation.error";
export * from "./not-authorized.error";
export * from "./un-authenticated.error";
export * from "./forbidden.error";
