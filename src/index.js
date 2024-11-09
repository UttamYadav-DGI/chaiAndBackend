import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({path:'./env'})


connectDB()
/*
we adding database using function

const connectDB(){}
connectDB()
///////////////////////////////////////////////////////////////////////////////////////////////////////
using iife

;(async ()=>{
    try{
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error",(error)=>{
        console.log("ERR",error);
        throw error
     })

     app.listen(process.env.PORT,()=>{
        console.log(`app is listining at port ${process.env.PORT}`)
     })
     
    }
    catch(error){
        console.log("Error",error);
        throw err
    }
})() //semicolon use for only cleaning purpose
 */