export interface IAppointment {
    name?: string;
    species?: string;
    breed?: string;
    date: Date;
    doctor?: string;
    diagnostic?: string;
    status?: "created" | "closed" | "confirmed";
}

export class Appointment implements IAppointment{
    date = new Date();
    constructor(){
    }
}

