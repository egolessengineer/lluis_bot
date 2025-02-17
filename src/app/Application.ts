import express, { Request, Response } from "express";
import cors from "cors";

import "dotenv/config";

const expressApp = express();

expressApp.use(cors());

const launchApp = () => {
  const botToken = process.env.BOT_TOKEN;
  const PORT = process.env.APP_PORT;
  if (botToken) {
    expressApp.get("/", (req: Request, res: Response) => {
      res.send("Hello World!");
    });

    expressApp.listen(PORT, () => {
      console.log(`🚀🚀 Server is Running on http://localhost:${PORT} 🚀🚀`);
    });
  }
};

export default launchApp;
