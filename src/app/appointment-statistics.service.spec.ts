import { TestBed } from '@angular/core/testing';

import { AppointmentStatisticsService } from './appointment-statistics.service';

describe('AppointmentStatisticsService', () => {
  let service: AppointmentStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
