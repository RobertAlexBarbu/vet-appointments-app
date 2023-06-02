import {IAppointment} from "./appointment.model";

export let Appointments: Array<IAppointment> = [
  {
    id: 1,
    name: "Rocky",
    species: "dog",
    breed: "Crossbreed",
    date: new Date(2023, 6, 20, 17, 30),
    doctor: "John Doe",
    diagnostic: "",
    status: "created"
  },
  {
    id: 2,
    name: "Luna",
    species: "cat",
    breed: "Crossbreed",
    date: new Date(2023, 3, 21, 10, 50),
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
    date: new Date(2023, 5, 7, 8, 50),
    doctor: "Mary Smith",
    diagnostic: "",
    status: "confirmed"
  },
  {
    id: 5,
    name: "Fresh",
    species: "fish",
    breed: "Goldfish",
    date: new Date(2023, 1, 10, 9, 50),
    doctor: "Mary Smith",
    diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
    status: "closed"
  },
  {
    id: 6,
    name: "Tommy",
    species: "cat",
    breed: "Tabby",
    date: new Date(2023, 3, 16, 13, 30),
    doctor: "Mary Smith",
    diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
    status: "closed"
  },
  {
    id: 7,
    name: "Jerry",
    species: "rodent",
    breed: "Hamster",
    date: new Date(2023, 4, 2, 11, 0),
    doctor: "Mary Smith",
    diagnostic: "He should take the following pills: a b c, and that’s the placeholder diagnostic",
    status: "closed"
  },
  {
    id: 8,
    name: "Rocky",
    species: "dog",
    breed: "Crossbreed",
    date: new Date(2023, 5, 1, 8, 30),
    doctor: "John Doe",
    diagnostic: "Placeholder diagnostic",
    status: "closed"
  }
]
