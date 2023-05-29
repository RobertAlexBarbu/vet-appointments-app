import {IAppointment, Species, Status} from "./appointment.model";

export let Appointments: Array<IAppointment> = [
    {
        name: "Rocky",
        species: Species.DOG,
        breed: "Crossbreed",
        date: new Date(2023,7, 20, 17,  30),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.CREATED
    },
    {
        name: "Luna",
        species: Species.CAT,
        breed: "Crossbreed",
        date: new Date(2023,7, 21, 10,  50),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.CONFIRMED
    },
    {
        name: "Fresh",
        species: Species.RODENT,
        breed: "Hamster",
        date: new Date(2023,7, 21, 10,  45),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.CREATED
    },
    {
        name: "Fresh",
        species: Species.RODENT,
        breed: "Hamster",
        date: new Date(2023,4, 10, 10,  45),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.CLOSED
    },
    {
        name: "Fresh",
        species: Species.RODENT,
        breed: "Hamster",
        date: new Date(2023,4, 11, 18, 10),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.CLOSED
    },
    {
        name: "Fresh",
        species: Species.RODENT,
        breed: "Hamster",
        date: new Date(2023,4, 11, 17, 10),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.CLOSED
    },
    {
        name: "Cerasel",
        species: Species.BIRD,
        breed: "Parrot",
        date: new Date(2023,4, 30, 9, 10),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.CONFIRMED
    },
    {
        name: "Fresh",
        species: Species.RODENT,
        breed: "Hamster",
        date: new Date(2023,4, 30, 10, 10),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: Status.CONFIRMED
    }
]