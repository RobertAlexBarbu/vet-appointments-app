import {IAppointment, Species, Status} from "./appointment.model";

export let Appointments: Array<IAppointment> = [
    {
        name: "Rocky",
        species: Species.Dog,
        breed: "Crossbreed",
        date: new Date(2023,7, 20, 17,  30),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.Created
    },
    {
        name: "Luna",
        species: Species.Cat,
        breed: "Crossbreed",
        date: new Date(2023,7, 21, 10,  30),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.Confirmed
    },
    {
        name: "Fresh",
        species: Species.Rodent,
        breed: "Hamster",
        date: new Date(2023,7, 21, 10,  30),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.Closed
    }
]