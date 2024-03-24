import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Schedules from "./models/schedules.model";
dotenv.config();


const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  try {
    const schedule = await Schedules.create({
      isActive: true,
      label: "For Ollie",
      repeatModes: ["1"]
    });
    console.log("Schedule created:", schedule);
    res.send("Created");
  } catch (error) {
    console.log('error :>> ', error);
    res.send(error)
  }
 

});


app.listen(port, () => {


  console.log(`[server]: Server is running at http://localhost:${port}`);
});