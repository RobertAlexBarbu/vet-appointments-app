import {Component, Input} from '@angular/core';
import {IAppointment} from "../../appointment.model";

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent {
    @Input() appointments!: Array<IAppointment>;
}
