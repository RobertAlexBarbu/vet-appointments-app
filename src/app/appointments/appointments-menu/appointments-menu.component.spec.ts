import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsMenuComponent } from './appointments-menu.component';

describe('AppointmentsMenuComponent', () => {
  let component: AppointmentsMenuComponent;
  let fixture: ComponentFixture<AppointmentsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
