import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors";

interface IUserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: IUserPayload;
    }
  }
}

export const authGuardMiddleware = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;
  if (!authToken) {
    throw new UnAuthenticatedError("Missing token");
  }
  try {
    const token = authToken.split(" ")[1];
    const decoded = (await jwt.verify(
      token,
      process.env.JWT_SECRET_KEY!
    )) as IUserPayload;
    req.currentUser = decoded;
  } catch (error) {
    throw new UnAuthenticatedError("Verify your token is failed.");
  }
  next();
};
