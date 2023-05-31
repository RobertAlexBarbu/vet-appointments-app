import { Component } from '@angular/core';
import {NavigationService} from "../navigation.service";
import {Appointment, IAppointment} from "../appointment.model";
import {AppointmentService} from "../appointment.service";

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {
    newAppointment: IAppointment;
    existingAnimals: any;

    existsOrNew:string = "exists";
    appointmentYear: number;
    appointmentMonth: number = 0;
    appointmentDate: number = 1;
    appointmentHour: number = 0;
    appointmentMinutes: number = 0;

    constructor(private navigate: NavigationService, private appointmentService: AppointmentService) {
        appointmentService.getAppointments().subscribe(
            (data) => {
                const appointmentSet = new Set();
                for(const appointment of data) {
                    appointmentSet.add(appointment);
                }
                console.log(Array.from(appointmentSet));

            }
        )
        this.newAppointment = new Appointment();
        this.appointmentYear = this.newAppointment.date.getFullYear();
    }
    goToAppointments():Promise<boolean> {
        return this.navigate.goToAppointments();
    }

}
