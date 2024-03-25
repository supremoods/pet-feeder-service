import Schedule from "../models/schedules.model";
import express, { Express, Request, Response } from "express";
import BaseController from "../utils/BaseController";
import Mixins from "../utils/Globals";

export default class ScheduleController extends BaseController{
    constructor(){
        super(Schedule.model)
    }

    async checkIsSched(req: Request, res: Response){
        try {
            const schedules = await Schedule.model.find();
        
            const dayToday:string = Mixins.getCurrentDay()
            const timeToday:string = Mixins.getCurrentTime()
            
            // check schedules if it is equals to time of today
            for (const schedule of schedules) {
                const scheduleTime: string = Mixins.convertToManilaTime(schedule.time.toString());

                console.log('scheduleTime :>> ', scheduleTime);
                // Check if the schedule matches the current day and time and also active
                if (schedule.repeatModes.some((item:any) => item.code === dayToday && item.isActive) && scheduleTime === timeToday) {
                    console.log(`Schedule ${schedule._id} is active at ${timeToday} on ${dayToday}`);
                    res.status(200).json(true); // Return true if there's a matching schedule
                    return;
                }
            }

            console.log('dayToday :>> ', Mixins.getCurrentDay());
            console.log('timeToday :>> ',  Mixins.getCurrentTime());
            console.log('convertToManilaTime() :>> ', Mixins.convertToManilaTime("2024-03-24T10:19:00.000Z"));


            res.status(201).json(false);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }


}