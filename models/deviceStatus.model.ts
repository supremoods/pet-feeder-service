import mongoose, { Schema, Model, Document, model } from "mongoose";
import dotenv from "dotenv";
import { IDeviceStatus } from "../types/deviceStatus";

dotenv.config();

export default class DeviceStatus {
    private static _model: Model<IDeviceStatus>;

    public static get model(): Model<IDeviceStatus> {
        if (!this._model) {
            mongoose.connect(process.env.MONGODB_URI||'')
            mongoose.Promise = global.Promise
            const deviceStatusSchema = new Schema<IDeviceStatus>(
                {
                    isActive: Boolean,
                    time: Date
                },
                {
                    timestamps: true
                }
            );
            this._model = mongoose.model<IDeviceStatus>("deviceStatus", deviceStatusSchema);
        }
        return this._model;
    }
}

