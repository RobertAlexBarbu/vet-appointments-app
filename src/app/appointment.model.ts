export interface IAppointment {
    name: string;
    species: Species;
    breed: string;
    date: Date;
    doctor: string;
    diagnostic: string;
    status: Status;
}
export enum Species {
    DOG = "Dog",
    CAT = "Cat",
    RODENT = "Rodent",
    BIRD = "Bird",
    FISH = "Fish",
    OTHER = "Other"
}
export enum Status {
    CREATED = "created",
    CONFIRMED = "confirmed",
    CLOSED = "closed"
}