import {
  prop,
  index,
  DocumentType,
  modelOptions,
  getModelForClass,
} from "@typegoose/typegoose";
import mongoose from 'mongoose';

const schemaOptions = {
  collection: "users",
  toJSON: {
    getters: true,
    versionKey: false,
  },
};

@index({ name: 1 }, { unique: true })
@modelOptions({ schemaOptions })
export class UserEntity {
  @prop({ required: true })
  public name: string;

  public static async createUsers(n: number) {
    const session = await mongoose.startSession();
    session.startTransaction();

    const newUsers = [...new Array(n)].map((_, i) => ({ name: `test${i}` }));

    try {
      const users = await User.insertMany(newUsers);
      session.commitTransaction();

      return users;
    } catch (e) {
      session.abortTransaction();
      throw e;
    }
  }
}

export const User = getModelForClass(UserEntity);

export type UserDocument = DocumentType<UserEntity>;
