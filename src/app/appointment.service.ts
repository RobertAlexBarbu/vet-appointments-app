import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {IAppointment} from "./appointment.model";
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

}
