import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Appointment, IAppointment} from "./appointment.model";
import {Appointments} from "./appointment.data";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
    constructor() {
    }

    getAppointments():Observable<Array<IAppointment>> {
        return of(Appointments);
    }

    addAppointment(appointment: IAppointment):Observable<IAppointment> {
        Appointments.push(appointment);
        return of(appointment);
    }

}
