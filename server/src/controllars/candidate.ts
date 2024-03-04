// import { partyType } from "#/@types/user";
// import { locationsTypes } from "#/utils/locations";
// import { Request, RequestHandler } from "express";
// interface requestCandidate extends Request{
//     body:{
//         location:locationsTypes,
//         candidateName:string,
//         party:partyType 
//     }
// }
// export const addCandidate:RequestHandler = (req:requestCandidate,res)=>{
//     const {location,candidateName,party} = req.body;
//     if(req.user.role !== "Admin"){
//         res.status(401).json({error:"Unauthorized Access"})
//     }
    
// }
