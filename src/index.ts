import {
  prop,
  index,
  DocumentType,
  modelOptions,
  getModelForClass,
} from "@typegoose/typegoose";

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
}

export const User = getModelForClass(UserEntity);

export type UserDocument = DocumentType<UserEntity>;
