import Schedule from "../models/schedules.model";
import express, { Express, Request, Response } from "express";
import BaseController from "../utils/BaseController";

export default class ScheduleController extends BaseController{
    constructor(){
        super(Schedule.model)
    }
}