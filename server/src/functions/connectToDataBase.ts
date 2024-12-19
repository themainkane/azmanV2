import mongoose from "mongoose";
import { consoleLog, logErrorMessage } from "../helpers/logging";

export default async function () {
  if (!process.env.MONGO_URL) {
    consoleLog("env variable MONGO_URL is undefined, exiting...");
    process.exit(1);
  }

  consoleLog("Attempting to connect to database");
  try {
    await mongoose.connect(process.env.MONGO_URL);

    consoleLog("Succesfully connected to Mongo database");
  } catch (error) {
    logErrorMessage("Mongo connection error", error);
    process.exit(1);
  }
}
