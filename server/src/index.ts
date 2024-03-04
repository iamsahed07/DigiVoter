import express from "express";
import dotenv from 'dotenv';
dotenv.config()
import './db'
const app = express();
const PORT = process.env.PORT || 8000;

import authRouter from '#/routers/auth';
// import candidatesRouter from "#/routers/candidates";
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static('src/public'))
app.use("/auth", authRouter);
// app.use("/candidates", candidatesRouter);
app.listen(PORT,()=>{
    console.log('Server is listening on port '+PORT)
})
