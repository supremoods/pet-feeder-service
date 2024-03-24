import mongoose, { Schema, Model, Document, model } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

interface ISchedule extends Document {
    isActive: boolean;
    label: string;
    repeatModes: string[];
    time: Date;
}

class Schedule {
    private static _model: Model<ISchedule>;

    public static get model(): Model<ISchedule> {
        if (!this._model) {
            mongoose.connect(process.env.MONGODB_URI||'')
            mongoose.Promise = global.Promise
            const scheduleSchema = new Schema<ISchedule>(
                {
                    isActive: Boolean,
                    label: String,
                    repeatModes: [String],
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
