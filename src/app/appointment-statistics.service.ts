import { Injectable } from '@angular/core';
import {IAppointment} from "./appointment.model";


export interface IStat {
  name: string,
  percentage: number,
  value: number,
  color: string,

  total: number;
}

export class Stat implements IStat {
  color: string = "teal";
  name: string = "";
  percentage: number = 0;
  value: number = 0;

  total: number = 0;


  constructor(name: string, value: number, total: number, color: string) {
    this.color = color;
    this.name = name;
    this.value = value;
    this.total = total;
    this.percentage = parseFloat(((parseFloat(value.toFixed(2)) / parseFloat(total.toFixed(2))) * 100).toFixed(2));
  }
}
@Injectable({
  providedIn: 'root'
})
export class AppointmentStatisticsService {

  constructor() { }

  getAnimalColor(animal: string) {
    switch(animal) {
      case "dog":
        return "#14B8A6";
      case "cat":
        return "#EAB308";
      case "rodent":
        return "#8B5CF6";
      case "bird":
        return "#ef4444";
      case "fish":
        return "pink";
      default:
        return "#7A7A7A";
    }
  }
  getStatusColor(status: string) {
    switch(status) {
      case "ongoing":
        return "#14B8A6";
      case "closed":
        return "#7A7A7A";
      default:
        return "#7A7A7A";
    }
  }
  getAnimalStats(appointments:Array<IAppointment>): Array<IStat> {
    const stats = []
    const total = appointments.length;
    let dogs = 0;
    let cats = 0;
    let rodents = 0;
    let birds = 0;
    let fish = 0;
    let other = 0;
    for(const appointment of appointments) {
      if(appointment.species === "dog") {
        dogs++;
      }
      else if(appointment.species === "cat") {
        cats++;
      }
      else if(appointment.species === "rodent") {
        rodents++;
      }
      else if(appointment.species === "bird") {
        birds++;
      }
      else if(appointment.species === "fish") {
        fish++;
      }
      else {
        other++;
      }
    }
    stats.push(new Stat("dog", dogs, total, this.getAnimalColor("dog")));
    stats.push(new Stat("cat", cats, total, this.getAnimalColor("cat")));
    stats.push(new Stat("rodent", rodents, total, this.getAnimalColor("rodent")));
    stats.push(new Stat("bird", birds, total, this.getAnimalColor("bird")));
    stats.push(new Stat("fish", fish, total, this.getAnimalColor("fish")));
    stats.push(new Stat("other", other, total, this.getAnimalColor("other")));

    return stats.sort((a, b) => b.value - a.value);
  }

  getStatusStats(appointments:Array<IAppointment>) {
    const total = appointments.length;
    const stats = [];
    let ongoing = 0;
    let closed = 0;
    for(const appointment of appointments) {
      if(appointment.status === "created" || appointment.status === "confirmed") {
        ongoing++;
      } else {
        closed++;
      }
    }
    stats.push(new Stat("ongoing", ongoing, total, this.getStatusColor("ongoing") ));
    stats.push(new Stat("closed", closed, total, this.getStatusColor("closed")));

    return stats.sort((a, b) => b.value - a.value);
  }
}
