import express, { Request, Response } from "express";
import "dotenv/config";

const expressApp = express();
const PORT = process.env.PORT || 5000;

expressApp.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

expressApp.listen(PORT, () => {
  console.log(`🚀🚀 Server is Running on http://localhost:${PORT} 🚀🚀`);
});
