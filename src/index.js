// require('dotenv').config(process.env)
import dotenv from "dotenv";
import ConnectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

ConnectDB().then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running at port: ${process.env.port}`);
  });
});

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
