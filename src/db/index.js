import mongoose from "mongoose";
import {DB_NAME} from '../constrants.js';
import express from 'express'

const app=express();

const connectDB = async()=>{
    try {
    const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! Db HOST :${connectionInstance.connection.host}`)//it's connect to mongodb and also we have know about which server we are connected
    } catch (error) {
        console.log("error",error);
        process.exit(1);
    }
}
export  default connectDB 

