import {IAppointment} from "./appointment.model";

export let Appointments: Array<IAppointment> = [
    {
        name: "Rocky",
        species: "dog",
        breed: "Crossbreed",
        date: new Date(2023,7, 20, 17,  30),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: "created"
    },
    {
        name: "Luna",
        species: "cat",
        breed: "Crossbreed",
        date: new Date(2023,7, 21, 10,  50),
        doctor: "John Doe",
        diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
        status: "confirmed"
    }
]