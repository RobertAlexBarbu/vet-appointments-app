import { Injectable } from '@angular/core';
import {AppointmentService} from "./appointment.service";
import {Animal, IAnimal, IAppointment} from "./appointment.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmentDataService {
    getExistingAnimals(appointments: Array<IAppointment>):Array<IAnimal> {
        const animalsSet: Set<string> = new Set();
        const animalsArray: Array<IAnimal> = [];
        for(const appointment of appointments) {
            animalsSet.add(JSON.stringify(new Animal(appointment.species, appointment.breed, appointment.name)));
        }
        Array.from(animalsSet).sort().forEach((animalString) => {
            animalsArray.push(JSON.parse(animalString));
        })
        return animalsArray;
    }
    getAnimalAppointments(appointments: Array<IAppointment>, animal: IAnimal):Array<IAppointment> {
        return appointments.filter((appointment) => {
            return animal.species === appointment.species
                && animal.breed === appointment.breed
                && animal.name === appointment.name;
        })
    }
}
