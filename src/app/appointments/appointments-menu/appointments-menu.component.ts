import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NavigationService} from "../../navigation.service";
import {SharedFilterService} from "../../shared-filter.service";
import {AppointmentFilterService, Filter, IFilter} from "../../appointment-filter.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-appointments-menu',
  templateUrl: './appointments-menu.component.html',
  styleUrls: ['./appointments-menu.component.css']
})
export class AppointmentsMenuComponent implements OnInit, OnDestroy{
    @Output() sortingOptionChange = new EventEmitter();

    filter: IFilter = new Filter();
    subscription!: Subscription;

    constructor(private navigation: NavigationService, private sharedFilter: SharedFilterService, private filterService: AppointmentFilterService) {
    }

    ngOnInit() {
      this.subscription = this.sharedFilter.getAppliedFilter().subscribe((filter)=>{
        this.filter = filter;
      })
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    getActiveFilters() {
      return this.filterService.getFiltersNumber(this.filter);
    }

    resetFilters() {
      this.sharedFilter.appliedFilter.next(new Filter());
    }
  public sortingChange(value: string) {
        this.sortingOptionChange.emit(value);
    }

    public goToNewAppointment(): Promise<boolean> {
        return this.navigation.newAppointment();
    }

    public goToFilterAppointments(): Promise<boolean> {
      return this.navigation.goToFilterAppointments();
    }
}
