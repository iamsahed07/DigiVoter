import { Request } from "express";
export interface CreateUser extends Request {
  body: {
    name: string;
    email: string;
    adhar: string;
    state: string;
    dob: string;
    voterId: string;
    mobile: string;
    address: string;
    assembly: string;
  };
}
export interface CreateAdmin extends Request {
  body: {
    name: string;
    email: string;
    password: string;
  };
}
export interface VerifyWhenLogIn extends Request {
  body: { mobile: string; adhar: string; token: string };
}

export const role = ["Admin","Voter","Candidate"];
export type roleType = "Admin" | "User";
export const party = ["INC", "BJP", "TMC","BSP"];
export type partyType = "INC" | "BJP" | "TMC" | "BSP";
export const status = ["LIVE", "UPCOMING"];
export type statusType = "LIVE" | "UPCOMING";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: any;
        name: string;
        email: string;
        verified: boolean;
        adhar: string;
        role: string;
        dob: string;
        voterId: string;
        mobile: string;
        address: string;
        age:number;
        assembly:string;
        state:string;
      };
      token: string;
    }
  }
}


export interface requestCandidate extends Request {
  body: {
    name: string;
    party: string;
    assembly: string;
    email: string;
    verified: boolean;
    adhar: string;
    location: string;
    role: string;
    dob: string;
    voterId: string;
    mobile: string;
    address: string;
    age: number;
    state:string
  };
}
