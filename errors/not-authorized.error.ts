import { CustomError, IError } from ".";

export class NotAuthorizedError extends CustomError {
  public statusCode: number = 401;
  constructor(public msg: string = "Not Authorized") {
    super(msg);
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  public serializeErrors(): IError[] {
    return [{ message: this.msg }];
  }
}
