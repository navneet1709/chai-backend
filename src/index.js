
// require("dotenv").config({path : "./env"})

import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";


connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log("Error : ", err)
        throw err
       })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is listening at port : ${process.env.PORT}`)
    }
    )
} )
.catch((err)=>{
    console.log("Mongo db connection failed !!", err)
})



/*
import express from "express"
const app = express()

;( async ()=>{
  try{
    await mongoose.connect(`${process.env.MONGO_URI} )/${DB_NAME}`)
   app.on("error",(err)=>{
    console.log("Error : ", err)
    throw err
   })
   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on ${process.env.PORT}`)
   })

  }catch(err){
    console.log(err)
    throw err
  }
})()
  */