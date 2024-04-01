import mongoose, { Schema, Model, Document, model } from "mongoose";
import dotenv from "dotenv";
import { IConfiguration } from "../types/configuration";

dotenv.config();

export default class Configuration {
    private static _model: Model<IConfiguration>;

    public static get model(): Model<IConfiguration> {
        if (!this._model) {
            mongoose.connect(process.env.MONGODB_URI||'')
            mongoose.Promise = global.Promise
            const configurationSchema = new Schema<IConfiguration>(
                {
                    duration: Number,
                },
                {
                    timestamps: true
                }
            );
            this._model = mongoose.model<IConfiguration>("configuration", configurationSchema);
        }
        return this._model;
    }
}

