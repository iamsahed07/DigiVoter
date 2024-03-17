import { CreateUser, VerifyWhenLogIn } from "#/@types/user";
import EmailVerificationToken from "#/models/emailVerificationToken";
import Election from "#/models/user";

import { RequestHandler, Response,Request } from "express";

import { JWT_SECRET } from "#/utils/variables";
import jwt from "jsonwebtoken";

export const getAllElections = async (req: any, res: Response) => {
    try{
        const elections = await Election.find({})
        res.status(200).json({message: "All elections fetched successfully.", elections, success: true})
    }catch(err: any){
        res.status(500).json({message: err.message, success: false})
    }
};

export const createElection = async (req: any, res: Response) => {
    try{
        //Destructure request body
        const { electionName,status,candidates } = req.body;
        //Create a new election 
        const election = new Election({ electionName,status,candidates })
        //Save newly created election
        await election.save();
        res.status(200).json({message: "Election successfully created", election, success: true})
    }catch(err: any){
        res.status(500).json({message: err.message, success: false})
    }
};

