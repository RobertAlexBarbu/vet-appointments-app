import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Filter, IFilter} from "./appointment-filter.service";

@Injectable({
  providedIn: 'root'
})
export class SharedFilterService {

  constructor() { }
  appliedFilter = new BehaviorSubject<IFilter>(new Filter());

  getAppliedFilter() {
    return this.appliedFilter.asObservable();
  }
}
