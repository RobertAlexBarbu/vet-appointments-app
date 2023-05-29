import { Component } from '@angular/core';
import {AppointmentService} from "../appointment.service";
import {IAppointment} from "../appointment.model";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
    appointments: Array<IAppointment> = [];
    constructor(private appointmentService: AppointmentService) {
        this.appointmentService.getAppointments().subscribe(
             (data) => {
                this.appointments = [...data];
            }
        );
        console.log(this.appointments);
    }

}
