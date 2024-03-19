import { partyType } from "#/@types/user";
import { statesTypes } from "#/utils/assembly";
import { Request, RequestHandler } from "express";
import Candidate from "#/models/candidate";
interface requestCandidate extends Request {
  body: {
    location: statesTypes;
    candidateName: string;
    party: partyType;
    assembly: string;
  };
}
export const addCandidate: RequestHandler = async (
  req: requestCandidate,
  res
) => {
  try {
    const { candidateName, party, assembly } = req.body;
    const candidate = new Candidate({ assembly, candidateName, party });
    await candidate.save();
    res.status(200).json({
      message: "Candidate added successfully",
      candidate,
      success: true,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message, success: false });
  }
};

export async function getAllCandidateBasedOnAssembly(req: any, res: any) {
  try {
    const { assembly } = req.body;
    const candidates = await Candidate.find({ assembly });
    res.status(200).json({
      message: "Candidate successfully fetched",
      success: true,
      candidates,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message, success: false });
  }
}
