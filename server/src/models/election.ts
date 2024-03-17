import { statusType,status } from "#/@types/user";
import { Model, ObjectId, Schema, model } from "mongoose";
interface electionDocument {
  electionName: string;
  status: statusType;
  candidates:ObjectId[]
}
const electionSchema = new Schema<electionDocument>(
  {
    electionName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: status,
      required:true,
      default: "UPCOMING"
    },
    candidates: [
      {
        types: Schema.Types.ObjectId,
        ref: "Candidate",
      },
    ],
  },
  { timestamps: true }
);

export default model("Election", electionSchema) as Model<electionDocument>;
