import {Component, Input} from '@angular/core';
import {IAppointment} from "../../../appointment.model";
import {NavigationService} from "../../../navigation.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
    @Input() appointment!: IAppointment;

    constructor(private navigate:NavigationService) {

    }

    goEditAppointment(id:number):Promise<boolean> {
      return this.navigate.goEditAppointment(id);
    }

}
