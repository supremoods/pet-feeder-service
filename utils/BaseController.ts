import express, { Express, Request, Response } from "express";


export default class BaseController {
    protected _model: any;

    constructor(model: any) {
        this._model = model;
        this.find = this.find.bind(this);
        this.findById = this.findById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async create(req: Request, res: Response) {
        try {
            const data: any = req.body;
            const response = await this._model.create(data);
            res.status(201).json(response);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async find(req: Request, res: Response) {
        try {
            const response = await this._model.find();
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const response = await this._model.findById(id);
            if (!response) {
                res.status(404).json({ message: "Resource not found" });
            } else {
                res.json(response);
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const response = await this._model.findByIdAndUpdate(id, req.body, { new: true });
            if (!response) {
                res.status(404).json({ message: "Resource not found" });
            } else {
                res.json(response);
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const response = await this._model.findByIdAndDelete(id);
            if (!response) {
                res.status(404).json({ message: "Resource not found" });
            } else {
                res.json({ message: "Resource deleted successfully" });
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}
