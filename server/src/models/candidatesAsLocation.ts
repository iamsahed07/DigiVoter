import { States, statesTypes } from "#/utils/assembly";
import { Model, ObjectId, Schema, model } from "mongoose";
export interface candidatesDocument {
  _id: ObjectId;
  location: statesTypes;
  candidates: ObjectId[];
}
const candidatesSchema = new Schema<candidatesDocument>(
  {
    location: {
      type: String,
      required: true,
      enum: States,
      unique: true,
    },
    candidates: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Candidate",
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default model(
  "CandidatesAL",
  candidatesSchema
) as Model<candidatesDocument>; //location wise Candidates
