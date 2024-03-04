import { role } from "#/@types/user";
import { locations, locationsTypes } from "#/utils/locations";
import { compare, hash } from "bcrypt";
import { Model, ObjectId, Schema, model} from "mongoose";
import { Date } from "mongoose";
export interface UserDocument {
  _id: ObjectId;
  name: string;
  email: string;
  verified: boolean;
  tokens: string[]; //store auth tokens
  location: locationsTypes;
  adhar: string;
  role: string;
  dob:string;
  voterId: string;
  mobile: string;
  address: string;
}
interface Methods {
  
}
const userSchema = new Schema<UserDocument, {}, Methods>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      enum: locations,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    adhar: {
      type: String,
      required: true,
      unique: true,
    },
    tokens: [String],
    role: {
      type: String,
      enum: role,
      default: "User",
    },
    dob: {
      type: String,
      trim: true,
      required: true,
    },
    voterId: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);


export default model("User", userSchema) as Model<UserDocument, {}, Methods>;