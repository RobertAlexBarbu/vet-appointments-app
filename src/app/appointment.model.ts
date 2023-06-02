export interface IAppointment {
    id: number;
    name: string;
    species: string;
    breed: string;
    date: Date;
    doctor: string;
    diagnostic?: string;
    status: "created" | "closed" | "confirmed";
}

export class Appointment implements IAppointment{
    id: number;
    name: string;
    species: string;
    breed: string;
    date: Date;
    doctor: string;
    diagnostic: string = "Edit to add a diagnostic";
    status: "created" | "closed" | "confirmed" = "created";
    constructor(id:number, name: string, species: string, breed: string, date: Date, doctor: string) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.breed = breed;
        this.date = date;
        this.doctor = doctor;
    }
}

export interface IAnimal {
    species: string;
    breed: string;
    name: string;
}
export class Animal {
    name;
    species;
    breed;
    constructor(species: string, breed: string, name: string) {
        this.species = species;
        this.breed = breed;
        this.name = name;
    }
}
