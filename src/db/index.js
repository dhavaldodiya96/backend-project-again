import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    connectionInstance.connection.once("connected", () => {
      console.log(`MONGODB CONNECTED : ${connectionInstance.connection.host}`);
    });
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR", error);
    process.exit(1);
  }
};

export default ConnectDB;
