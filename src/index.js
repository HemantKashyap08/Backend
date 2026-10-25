import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";




connectDB()













/*
import express from "express";
const app = require ('express')
(async()=>{
    try{
       const mongo =await  mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERROR",error);
        throw error
       })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })

    }catch(error){
        console.log("error", error)
    }
})()*/