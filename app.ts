import express, { Application, Express, Request, Response } from "express";
import dotenv from "dotenv";
import ScheduleRoutes from "./routes/schedules";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

const start = async(app: Application)=>{
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

start(app)
app.use(express.json())
app.use("/schedules", ScheduleRoutes)

