import {Component, Input} from '@angular/core';
import {IAppointment} from "../../appointment.model";
import {AppointmentService} from "../../appointment.service";
import {AppointmentSorterService} from "../../appointment-sorter.service";

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent {

    appointments: Array<IAppointment> = [];

    @Input() sortingOption!:string;

    constructor(private appointmentService: AppointmentService, private sorter: AppointmentSorterService) {
        this.appointmentService.getAppointments().subscribe(
            (data) => {
                this.appointments = data;
            });
    }

    getSorted(option:string) {
        return this.sorter.sortAppointments(this.appointments, this.sortingOption);
    }
}
