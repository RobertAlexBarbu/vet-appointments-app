import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-appointments-menu',
  templateUrl: './appointments-menu.component.html',
  styleUrls: ['./appointments-menu.component.css']
})
export class AppointmentsMenuComponent {
    @Output() sortingOptionChange = new EventEmitter();
    public sortingChange(value: string) {
        this.sortingOptionChange.emit(value);
    }
}
