import * as mongoose from "mongoose";
import { BadRequestError } from "../errors";

export const parseObjectID = (id: string): mongoose.Types.ObjectId => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new BadRequestError("ObjectID is invalid. Pls double check!");
  }
  return new mongoose.Types.ObjectId(id);
};
