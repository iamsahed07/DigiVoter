import { Request, Response } from "express";
import VoteData from '#/models/voteData';
import GivenVote from '#/models/givenVote'
export const giveVote = async (req:Request, res:Response) => {
  try {
    const {id} = req.user;
    const {candidateId,electionId,candidatesAsAssemblyId} = req.body;

    const isVoted = await GivenVote.findOne({voteRef:id})
    if(isVoted){
        return res.status(400).json({ error: "Vote is already given!!", success: false });
    }

    const voteData = await VoteData.findOne({ candidateRef: candidateId });
    let newGivenVote;
    if (voteData) {
      voteData.votes += 1;
      await voteData.save();
      newGivenVote = await GivenVote.create({
        voteRef: voteData._id,
        voterRef: id,
      });
    } else {
      const newVote = await VoteData.create({ candidateRef: candidateId });
      newVote.electionRef = electionId;
      newVote.assemblyRef = candidatesAsAssemblyId;
      newVote.votes += 1;
      await newVote.save();
      newGivenVote = await GivenVote.create({
        voteRef: newVote._id,
        voterRef: id,
      });
    }
    res.status(200).json({ message: "vote give sucessfull!!", success: true });
  } catch (err: any) {
    res.status(400).json({ message: err.message, success: false });
  }
};
