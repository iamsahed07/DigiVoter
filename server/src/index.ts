import express from "express";
import dotenv from 'dotenv'
dotenv.config({path:'../.env'})
import {connect} from '#/db/dbConfig'
const app = express();
const PORT = process.env.PORT || 8000;
connect();
import authRouter from '#/routers/auth';
import elections from "#/routers/elections"
import candidatesRouter from "#/routers/candidates";
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static('src/public'))
app.use("/auth", authRouter);
app.use("/elections", elections)
app.use("/candidates", candidatesRouter);
app.listen(PORT,()=>{
    console.log('Server is listening on port '+PORT)
})
