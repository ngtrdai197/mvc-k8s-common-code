import { CustomError, IError } from ".";

export class UnAuthenticatedError extends CustomError {
  public statusCode: number = 401;
  constructor(public msg: string = "Unauthenticated") {
    super(msg);
    Object.setPrototypeOf(this, UnAuthenticatedError.prototype);
  }
  public serializeErrors(): IError[] {
    return [{ message: this.msg }];
  }
}
