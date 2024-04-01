import ConfigurationController from "../controller/configuration.controller";
import express, { Express } from "express";

const ConfigurationRoutes: Express = express();
const configurationController = new ConfigurationController();

// Define base path
const basePath = "/api/configuration/";

// Define routes
ConfigurationRoutes.get(basePath, configurationController.find);
ConfigurationRoutes.get(`${basePath}:id`, configurationController.findById);
ConfigurationRoutes.put(`${basePath}:id`, configurationController.update);
ConfigurationRoutes.delete(`${basePath}:id`, configurationController.delete);
ConfigurationRoutes.post(basePath, configurationController.create);

// Additional custom route
ConfigurationRoutes.get("/api/getDuration", configurationController.getDuration);
export default ConfigurationRoutes;
