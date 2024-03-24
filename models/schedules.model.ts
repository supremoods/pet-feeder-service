import { Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI||'')
mongoose.Promise = global.Promise


const schedules = new Schema(
    {
        isActive: Boolean,
        label: String,
        repeatModes: Array,
        time: Date,
    },
    {
        timestamps: true
    }
);


const Schedules = mongoose.models.schedules || mongoose.model("schedules", schedules)

export default Schedules