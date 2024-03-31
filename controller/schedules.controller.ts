import Schedule from "../models/schedules.model";
import express, { Express, Request, Response } from "express";
import BaseController from "../utils/BaseController";
import Mixins from "../utils/Globals";
import { IMode, ISchedule } from "../types/schedule";

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
                
                await ScheduleController.resetDispense(schedule, schedule.id)

                console.log('scheduleTime :>> ', scheduleTime);
                // Check if the schedule matches the current day and time and also active
                if (schedule.repeatModes.some((item:any) => item.code === dayToday && item.isActive && !item.isDispensed) && scheduleTime === timeToday) {
                    schedule.repeatModes.forEach( async (mode : IMode) => {
                        if(mode.code == dayToday){
                            mode.isDispensed = true
                            await Schedule.model.findByIdAndUpdate(schedule.id,{repeatModes:  schedule.repeatModes})
                        }
                    });
                    console.log(`Schedule ${schedule._id} is active at ${timeToday} on ${dayToday}`);
                    return res.status(200).json(true);// Return true if there's a matching schedule
                }
            }
            
            console.log('dayToday :>> ', Mixins.getCurrentDay());
            console.log('timeToday :>> ',  Mixins.getCurrentTime());
            
            console.log('Mixins.getDateYesterday() :>> ', Mixins.getDateYesterday());
            return res.status(201).json(false);
        } catch (error) {
            console.log('error :>> ', error);
            return res.status(500).json({ error: error });
        }
    }

    static async resetDispense(schedule : ISchedule, id:any){
        try {
            const dateYesteday :  {date: Date, day: string} = Mixins.getDateYesterday()
            let _repeatModes : IMode[];
            schedule.repeatModes.forEach( (mode : IMode) => {
                if(mode.code == dateYesteday.day){
                    mode.isDispensed = false
                    _repeatModes = schedule.repeatModes;
                }
            });
            await Schedule.model.findByIdAndUpdate(id,{repeatModes : _repeatModes!} )
        } catch (error) {
            console.log('error :>> ', error);
            throw error
        }

    }





}