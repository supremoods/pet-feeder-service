import ScheduleController from "../controller/schedules.controller";
import express, { Express } from "express";

const ScheduleRoutes: Express = express();
const scheduleController = new ScheduleController();

// Define base path
const basePath = "/api/schedules/";

// Define routes
ScheduleRoutes.get(basePath, scheduleController.find);
ScheduleRoutes.get(`${basePath}:id`, scheduleController.findById);
ScheduleRoutes.put(`${basePath}:id`, scheduleController.update);
ScheduleRoutes.delete(`${basePath}:id`, scheduleController.delete);
ScheduleRoutes.post(basePath, scheduleController.create);

// Additional custom route
ScheduleRoutes.get("/api/isSched", scheduleController.checkIsSched);

export default ScheduleRoutes;
