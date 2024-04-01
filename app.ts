import express, { Application, Express, Request, Response } from "express";
import dotenv from "dotenv";
import ScheduleRoutes from "./routes/schedules";
import ConfigurationRoutes from "./routes/configuration";
import DeviceStatusRoutes from "./routes/deviceStatus";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

const start = async(app: Application)=>{
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

start(app)
app.use(express.json())
app.use("/schedules", ScheduleRoutes)
app.use("/configurations", ConfigurationRoutes)
app.use("/deviceStatus", DeviceStatusRoutes)