import mongoose from "mongoose";
import {MONGO_URI} from '#/utils/variables'
export async function connect(){
    try{
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("Connection successfull!")

    }catch(err){
        console.log("There is something wrong while connecting to the database")
    }
}