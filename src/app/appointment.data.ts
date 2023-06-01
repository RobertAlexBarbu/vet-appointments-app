import {IAppointment} from "./appointment.model";

export let Appointments: Array<IAppointment> = [
    {
        id: 1,
        name: "Rocky",
        species: "dog",
        breed: "Crossbreed",
        date: new Date(2023,7, 20, 17,  30),
        doctor: "John Doe",
        diagnostic: "",
        status: "created"
    },
    {
        id: 2,
        name: "Luna",
        species: "cat",
        breed: "Crossbreed",
        date: new Date(2023,3, 21, 10,  50),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic placeholder diagnostic placeholder diagnostic placeholder diagnostic placeholder diagnostic",
        status: "closed"
    },
    {
        id: 3,
        name: "Luna",
        species: "cat",
        breed: "Crossbreed",
        date: new Date(2023, 3, 10, 20, 20),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: "closed"
    },
    {
        id: 4,
        name: "Coco",
        species: "bird",
        breed: "Parrot",
        date: new Date(2023,5, 7, 8,  50),
        doctor: "Mary Smith",
        diagnostic: "",
        status: "confirmed"
    },
    {
        id: 5,
        name: "Fresh",
        species: "fish",
        breed: "Goldfish",
        date: new Date(2023,1, 10, 9,  50),
        doctor: "Mary Smith",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: "closed"
    }
]
