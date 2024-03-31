import mongoose, { Schema, Model, Document, model } from "mongoose";
import dotenv from "dotenv";
import { ISchedule } from "../types/schedule";

dotenv.config();


class Schedule {
    private static _model: Model<ISchedule>;
    repeatModes: any;

    public static get model(): Model<ISchedule> {
        if (!this._model) {
            mongoose.connect(process.env.MONGODB_URI||'')
            mongoose.Promise = global.Promise
            const scheduleSchema = new Schema<ISchedule>(
                {
                    isActive: Boolean,
                    label: String,
                    repeatModes: [],
                    time: Date,
                },
                {
                    timestamps: true
                }
            );
            this._model = mongoose.model<ISchedule>("schedules", scheduleSchema);
        }
        return this._model;
    }
}

export default Schedule;
