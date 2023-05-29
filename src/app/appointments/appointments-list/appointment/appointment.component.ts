import {Component, Input} from '@angular/core';
import {IAppointment} from "../../../appointment.model";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
    @Input() appointment!: IAppointment;
}
