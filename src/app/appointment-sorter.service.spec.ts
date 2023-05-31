import { TestBed } from '@angular/core/testing';

import { AppointmentSorterService } from './appointment-sorter.service';

describe('AppointmentSorterService', () => {
  let service: AppointmentSorterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentSorterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
