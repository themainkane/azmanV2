import { Schema, Document, Types, model, SchemaDefinition } from "mongoose";

//define the shape of the user
interface UserBase {
  first_name: string;
  last_name: string;
  role_id: number;
  email: string;
}

// define the schemafields.
const schemaFields: SchemaDefinition<UserBase> = {
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  role_id: { type: Number, required: true },
  email: { type: String, required: true },
};

export interface IUser extends UserBase, Document {
  _id: Types.ObjectId;
}

const UserSchema = new Schema<IUser>(schemaFields, {
  timestamps: true,
  strict: false,
});

const User = model<IUser>("User", UserSchema);

export default User;

// Typeguard
export function isPopulatedUser(obj: IUser | Types.ObjectId): obj is IUser {
  return obj && typeof obj === "object" && obj !== null && "_id" in obj;
}
