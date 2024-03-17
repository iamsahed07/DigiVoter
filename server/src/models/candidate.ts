import { party, partyType } from "#/@types/user";
import { File } from "formidable";
import { Model, Schema, model } from "mongoose";
interface candidateDocument {
  candidateName: string;
  party: partyType;
  assembly: string
}
const candidateSchema = new Schema<candidateDocument>(
  {
    candidateName: {
      type: String,
      required: true,
    },
    party: {
      type: String,
      enum: party,
    },
    assembly:{
      type: String
    }
  },
  { timestamps: true }
);

export default model(
    "Candidate",
    candidateSchema
) as Model<candidateDocument>;