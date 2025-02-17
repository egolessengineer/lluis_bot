import express from "express";
import cors from "cors";

import "dotenv/config";

const expressApp = express();

expressApp.use(cors());

const launchApp = () => {
  const botToken = process.env.BOT_TOKEN;
  if (botToken) {
  }
};

export default launchApp();
