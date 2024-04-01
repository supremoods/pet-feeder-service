
import Configuration from "../models/configuration.model";
import BaseController from "../utils/BaseController";
import express, { Express, Request, Response } from "express";

export default class ConfigurationController extends BaseController{

    constructor(){
        super(Configuration.model)
    }


    async getDuration(req: Request, res: Response){
        try {
            const configuration = await Configuration.model.findById("66099796beefec7fc3a6dde2")
            return res.status(200).json(configuration!.duration * 1000);
        } catch (error) {
            console.log('error :>> ', error);
            return res.status(500).json({ error: error });
        }
    }

}