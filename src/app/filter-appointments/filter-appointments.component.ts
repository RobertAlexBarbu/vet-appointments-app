import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NavigationService} from "../navigation.service";
import {SharedFilterService} from "../shared-filter.service";
import {AppointmentFilterService, Filter, IFilter} from "../appointment-filter.service";
import {Subscription} from "rxjs";
import {AppointmentService} from "../appointment.service";
import {IAppointment} from "../appointment.model";

@Component({
  selector: 'app-filter-appointments',
  templateUrl: './filter-appointments.component.html',
  styleUrls: ['../add-appointment/add-appointment.component.css', './filter-appointments.component.css']
})
export class FilterAppointmentsComponent implements OnInit, OnDestroy{


  filter :IFilter = new Filter();
  appointments:Array<IAppointment> = [];
  existingDoctors:Array<string> = []

  constructor(private navigate: NavigationService, private sharedFilter: SharedFilterService, private filterService: AppointmentFilterService, private appointmentService: AppointmentService) {

  }
  subscription!: Subscription;
  ngOnInit() {
    this.subscription = this.sharedFilter.getAppliedFilter().subscribe((filter)=> {
        this.filter.species = {...filter.species};
        this.filter.status = {...filter.status};
        this.filter.date = {...filter.date};
        this.filter.doctor = filter.doctor;

    });
    this.appointmentService.getAppointments().subscribe((appointments) => {
      this.appointments = appointments;
    });
    this.existingDoctors = this.filterService.getExistingDoctors(this.appointments);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToAppointments():Promise<boolean> {
    return this.navigate.goToAppointments();
  }


  onSubmit():Promise<boolean> {
    this.sharedFilter.appliedFilter.next(this.filter);
    return this.goToAppointments();
  }

  resetFilter():Promise<boolean> {
    this.sharedFilter.appliedFilter.next(new Filter());
    return this.goToAppointments();
  }
}
