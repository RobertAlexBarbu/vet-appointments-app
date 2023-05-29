import { Component } from '@angular/core';
import {AppointmentService} from "../appointment.service";
import {IAppointment} from "../appointment.model";
import {getLocaleMonthNames} from "@angular/common";
import {Observer} from "rxjs";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {

    todayAppointments: Array<IAppointment> = [];
    upcomingAppointments: Array<IAppointment> = [];
    pastAppointments: Array<IAppointment> = [];

    sortingOption:string="closest";
    setSortingOption(value:string) {
        this.sortingOption = value;
    }

    constructor(private appointmentService: AppointmentService) {
        this.appointmentService.getAppointments().subscribe(
             (data) => {
                data.forEach((appointment)=>{
                    let todayDate = new Date();
                    if (appointment.date.getMonth() === todayDate.getMonth() ) {
                        if(appointment.date.getDate() === todayDate.getDate()) {
                            this.todayAppointments.push(appointment);
                        }
                        else if(appointment.date.getDate() < todayDate.getDate()) {
                            this.pastAppointments.push(appointment);
                        }
                        else {
                            this.upcomingAppointments.push(appointment);
                        }
                    }
                    else if(appointment.date.getMonth() < todayDate.getMonth()) {
                        this.pastAppointments.push(appointment);
                    }
                    else {
                        this.upcomingAppointments.push(appointment);
                    }
                });
            }
        );
        const sortAppointments = (a:IAppointment, b:IAppointment) => a.date.getTime() - b.date.getTime();
        this.todayAppointments.sort(sortAppointments);
        this.upcomingAppointments.sort(sortAppointments);
        this.pastAppointments.sort(sortAppointments);
    }

}
