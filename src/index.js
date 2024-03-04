// require('dotenv').config(process.env)
import dotenv from "dotenv";
import ConnectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

ConnectDB();

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("error");
//     });

//     app.listen(process.env.PORT, ()=>{

//     })
//   } catch (error) {
//     console.log(error);
//   }
// })();
