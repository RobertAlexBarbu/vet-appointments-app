import {ApplicationRef, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IAppointment} from "../../appointment.model";
import {AppointmentService} from "../../appointment.service";
import {AppointmentSorterService} from "../../appointment-sorter.service";
import {SharedFilterService} from "../../shared-filter.service";
import {AppointmentFilterService, Filter, IFilter} from "../../appointment-filter.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit, OnDestroy{

    appointments: Array<IAppointment> = [];
    filter: IFilter = new Filter();
    @Input() sortingOption!:string;

    constructor(private appointmentService: AppointmentService, private sorter: AppointmentSorterService, private sharedFilter: SharedFilterService, private filterService: AppointmentFilterService, private changes: ApplicationRef) {

    }
    subscription!: Subscription;
    ngOnInit() {
      this.subscription = this.appointmentService.getAppointments().subscribe(
        (appointments) => {
          this.appointments = appointments;
        });
      this.sharedFilter.getAppliedFilter().subscribe(
        (filter) => {
          this.filter = filter;
        }
      )
    }
    ngOnDestroy() {
      this.subscription.unsubscribe()
    }

    getSorted(option:string) {
        return this.sorter.sortAppointments(this.getFiltered(this.filter), this.sortingOption);
    }
    getFiltered(filter:object) {
      return this.filterService.filterAppointments(this.appointments, this.filter);
    }
}
