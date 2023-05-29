import {Component, EventEmitter, Output} from '@angular/core';
import {NavigationService} from "../../navigation.service";

@Component({
  selector: 'app-appointments-menu',
  templateUrl: './appointments-menu.component.html',
  styleUrls: ['./appointments-menu.component.css']
})
export class AppointmentsMenuComponent {
    @Output() sortingOptionChange = new EventEmitter();

    constructor(private navigation: NavigationService) {
    }

    public sortingChange(value: string) {
        this.sortingOptionChange.emit(value);
    }

    public goToNewAppointment(): Promise<boolean> {
        return this.navigation.newAppointment();
    }
}
