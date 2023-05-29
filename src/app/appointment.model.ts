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
    Dog = "Dog",
    Cat = "Cat",
    Rodent = "Rodent",
    Bird = "Bird",
    Fish = "Fish",
    Other = "Other"
}
export enum Status {
    Created = "created",
    Confirmed = "confirmed",
    Closed = "closed"
}