                    
export interface IMode{
    mode: string,
    code: string,
    isActive: boolean,
    isDispensed: boolean
}

export interface ISchedule extends Document {
    isActive: boolean;
    label: string;
    repeatModes: IMode[];
    time: Date;
}