import { TestBed } from '@angular/core/testing';

import { AppointmentFilterService } from './appointment-filter.service';

describe('AppointmentDataService', () => {
  let service: AppointmentFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
