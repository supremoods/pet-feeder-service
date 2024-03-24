import ScheduleController from "../controller/schedules.controller";
import express, { Express } from "express";

const ScheduleRoutes: Express = express();

const Schedule = new ScheduleController() 

ScheduleRoutes.get("/", Schedule.find)
ScheduleRoutes.get("/:id", Schedule.findById)
ScheduleRoutes.put("/:id", Schedule.update)
ScheduleRoutes.delete("/:id", Schedule.delete)
ScheduleRoutes.post("/", Schedule.create)
  
export default ScheduleRoutes