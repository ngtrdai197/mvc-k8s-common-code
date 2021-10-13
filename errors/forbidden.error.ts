import { CustomError, IError } from ".";

export class ForbiddenError extends CustomError {
  public statusCode: number = 403;
  constructor(
    public msg: string = "Do not have permission to access resource"
  ) {
    super(msg);
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
  public serializeErrors(): IError[] {
    return [{ message: this.msg }];
  }
}
