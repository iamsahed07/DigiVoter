import { Request } from "express";
import { Date } from "mongoose";
export interface CreateUser extends Request {
  body: {
    name: string;
    email: string;
    adhar: string;
    location: string;
    dob: string;
    voterId: string;
    mobile: string;
    address: string;
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

export const role = ["Admin", "User"];
export type roleType = "Admin" | "User";
export const party = ["INC", "BJP", "TMC"];
export type partyType = "INC" | "BJP" | "TMC";
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
        location: string;
        role: string;
        dob: string;
        voterId: string;
        mobile: string;
        address: string;
        age:number
      };
      token: string;
    }
  }
}
