import express, { Express } from "express";
import DeviceStatusController from "../controller/deviceStatus.controller";

const DeviceStatusRoutes: Express = express();
const deviceStatusController = new DeviceStatusController();

// Define base path
const basePath = "/api/deviceStatus/";

// Define routes
DeviceStatusRoutes.get(basePath, deviceStatusController.find);
DeviceStatusRoutes.get(`${basePath}:id`, deviceStatusController.findById);
DeviceStatusRoutes.put(`${basePath}:id`, deviceStatusController.update);
DeviceStatusRoutes.delete(`${basePath}:id`, deviceStatusController.delete);
DeviceStatusRoutes.post(basePath, deviceStatusController.create);

// Additional custom route
DeviceStatusRoutes.get("/api/updateStatus", deviceStatusController.updateStatus);


export default DeviceStatusRoutes;
