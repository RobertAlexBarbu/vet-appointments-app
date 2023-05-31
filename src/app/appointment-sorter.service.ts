import { Injectable } from '@angular/core';
import {IAppointment} from "./appointment.model";

@Injectable({
  providedIn: 'root'
})
export class AppointmentSorterService {

  constructor() {

  }

  sortAppointments(appointments: Array<IAppointment>, option: string): Array<IAppointment> {

      const increasingAppointments = (a:IAppointment, b:IAppointment) => a.date.getTime() - b.date.getTime();
      const decreasingAppointments = (a:IAppointment, b:IAppointment) => b.date.getTime() - a.date.getTime();
      if(option==="farthest") {
          appointments.sort(decreasingAppointments);
      } else {
          appointments.sort(increasingAppointments);
      }
      return appointments;

  }
}
