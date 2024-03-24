import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";
dotenv.config();

const database = mongoose.connect(process.env.MONGODB_URI!)

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  database.then(() => {
    res.send("Connected");

  }).catch((error) => {
    res.send(" Not Connected");
  });
});


app.listen(port, () => {


  console.log(`[server]: Server is running at http://localhost:${port}`);
});