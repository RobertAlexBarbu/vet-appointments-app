import {Component, Input, OnInit} from '@angular/core';
import {IAppointment} from "../../appointment.model";
import {AppointmentService} from "../../appointment.service";
import {AppointmentSorterService} from "../../appointment-sorter.service";

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit{

    appointments: Array<IAppointment> = [];

    @Input() sortingOption!:string;

    constructor(private appointmentService: AppointmentService, private sorter: AppointmentSorterService) {

    }
    ngOnInit() {
      this.appointmentService.getAppointments().subscribe(
        (appointments) => {
          this.appointments = appointments;
        });
    }

    getSorted(option:string) {
        return this.sorter.sortAppointments(this.appointments, this.sortingOption);
    }
}
