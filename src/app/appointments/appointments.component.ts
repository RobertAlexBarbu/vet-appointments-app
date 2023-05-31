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


    sortingOption:string="farthest";
    setSortingOption(value:string) {
        this.sortingOption = value;
    }

    constructor() {
    }

}
