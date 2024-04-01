
import moment from "moment";
import DeviceStatus from "../models/deviceStatus.model";
import BaseController from "../utils/BaseController";
import express, { Express, Request, Response } from "express";

export default class DeviceStatusController extends BaseController{

    constructor(){
        super(DeviceStatus.model)
    }

    async updateStatus(req: Request, res: Response){
        try {
            const response =  await DeviceStatus.model.findByIdAndUpdate(
                            '660a35dc93e5a63a027f964c',{
                                time:moment.tz("Asia/Manila")
                            })
            return res.status(200).json(response);
        } catch (error) {
            console.log('error :>> ', error);
            return res.status(500).json({ error: error });
        }
    }
}