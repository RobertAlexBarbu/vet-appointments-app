import {Injectable} from '@angular/core';
import {AppointmentService} from "./appointment.service";
import {Animal, IAnimal, IAppointment} from "./appointment.model";

export interface IFilter {

  species: {
    dog: boolean,
    cat: boolean,
    rodent: boolean,
    bird: boolean,
    fish: boolean,
    other: boolean
  },
  status: {
    created: boolean,
    confirmed: boolean,
    closed: boolean
  },
  date: {
    today: boolean,
    upcoming: boolean,
    past: boolean
  },
  doctor: string
}

export class Filter implements IFilter {

  species: { dog: boolean; cat: boolean; rodent: boolean; bird: boolean; fish: boolean; other: boolean } = {
    dog: false,
    cat: false,
    rodent: false,
    bird: false,
    fish: false,
    other: false
  };

  constructor() {

  }

  status: { created: boolean; confirmed: boolean; closed: boolean } = {
    created: false,
    confirmed: false,
    closed: false
  };
  date: { today: boolean; upcoming: boolean; past: boolean } = {
    today: false,
    upcoming: false,
    past: false
  };
  doctor: string = "any";
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentFilterService {
  getExistingAnimals(appointments: Array<IAppointment>): Array<IAnimal> {
    const animalsSet: Set<string> = new Set();
    const animalsArray: Array<IAnimal> = [];
    for (const appointment of appointments) {
      animalsSet.add(JSON.stringify(new Animal(appointment.species, appointment.breed, appointment.name)));
    }
    Array.from(animalsSet).sort().forEach((animalString) => {
      animalsArray.push(JSON.parse(animalString));
    })
    return animalsArray;
  }

  getExistingDoctors(appointments: Array<IAppointment>): Array<string> {
    const doctorsSet: Set<string> = new Set();
    const doctorsArray: Array<string> = [];
    for (const appointment of appointments) {
      doctorsSet.add(appointment.doctor);
    }
    return Array.from(doctorsSet);
  }

  getAnimalAppointments(appointments: Array<IAppointment>, animal: IAnimal): Array<IAppointment> {
    return appointments.filter((appointment) => {
      return animal.species === appointment.species
        && animal.breed === appointment.breed
        && animal.name === appointment.name;
    })
  }

  getFiltersNumber(filter: IFilter) {
    let nr = 0;
    let key: keyof typeof filter.species;
    for (key in filter.species) {
      if (filter.species[key]) {
        nr++;
      }
    }
    let key2: keyof typeof filter.status;
    for (key2 in filter.status) {
      if (filter.status[key2]) {
        nr++;
      }
    }
    let key3: keyof typeof filter.date;
    for (key3 in filter.date) {
      if (filter.date[key3]) {
        nr++;
      }
    }
    if (filter.doctor !== "any") {
      nr++;
    }
    return nr++;
  }

  isSpeciesFilterNull(filter: IFilter): boolean {
    let key: keyof typeof filter.species;
    for (key in filter.species) {
      if (filter.species[key]) {
        return false;
      }
    }
    return true;
  }

  isStatusFilterNull(filter: IFilter): boolean {
    let key: keyof typeof filter.status;
    for (key in filter.status) {
      if (filter.status[key]) {
        return false;
      }
    }
    return true;
  }

  isDateFilterNull(filter: IFilter): boolean {
    let key: keyof typeof filter.date;
    for (key in filter.date) {
      if (filter.date[key]) {
        return false;
      }
    }
    return true;
  }

  filterAppointments(appointments: Array<IAppointment>, filter: IFilter) {

    let filterSpecies = !this.isSpeciesFilterNull(filter);
    let filterStatus = !this.isStatusFilterNull(filter);
    let filterDate = !this.isDateFilterNull(filter);
    let filterDoctor = filter.doctor === "any" ? false : true;

    return appointments.filter(
      (appointment) => {
        let speciesValidity;
        if (filterSpecies === true) {
          if (appointment.species === "dog" && filter.species.dog === true) {
            speciesValidity = true;
          } else if (appointment.species === "cat" && filter.species.cat === true) {
            speciesValidity = true;
          } else if (appointment.species === "rodent" && filter.species.rodent === true) {
            speciesValidity = true;
          } else if (appointment.species === "bird" && filter.species.bird === true) {
            speciesValidity = true;
          } else if (appointment.species === "fish" && filter.species.fish === true) {
            speciesValidity = true;
          } else if (appointment.species === "other" && filter.species.other === true) {
            speciesValidity = true;
          } else {
            speciesValidity = false;
          }
        } else {
          speciesValidity = true;
        }
        let statusValidity;
        if (filterStatus === true) {
          if (appointment.status === "created" && filter.status.created === true) {
            statusValidity = true;
          } else if (appointment.status === "confirmed" && filter.status.confirmed === true) {
            statusValidity = true;
          } else if (appointment.status === "closed" && filter.status.closed === true) {
            statusValidity = true;
          } else {
            statusValidity = false;
          }
        } else {
          statusValidity = true;
        }
        let dateValidity;
        if (filterDate === true) {
          const auxDate = new Date();
          if (appointment.date.getFullYear() === auxDate.getFullYear()
            && appointment.date.getMonth() === auxDate.getMonth()
            && appointment.date.getDate() === auxDate.getDate()
            && filter.date.today === true
          ) {
            dateValidity = true;
          } else if (appointment.date.getTime() > auxDate.getTime() && filter.date.upcoming === true) {
            dateValidity = true;
          } else if (appointment.date.getTime() < auxDate.getTime() && filter.date.past === true) {
            dateValidity = true;
          } else {
            dateValidity = false;
          }
        } else {
          dateValidity = true;
        }
        let doctorValidity;
        if (filterDoctor === true) {
          if (appointment.doctor === filter.doctor) {
            doctorValidity = true;
          } else {
            doctorValidity = false;
          }
        } else {
          doctorValidity = true;
        }

        return statusValidity && speciesValidity && dateValidity && doctorValidity;
      }
    )


  }
}


