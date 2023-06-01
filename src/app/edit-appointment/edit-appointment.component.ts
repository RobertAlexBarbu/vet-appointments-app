import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppointmentService} from "../appointment.service";
import {Appointment, IAppointment} from "../appointment.model";
import {NavigationService} from "../navigation.service";

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css', '../add-appointment/add-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  appointment: IAppointment = new Appointment(0, "", "", "", new Date(), "");
  initialStatus!: string;

  appointmentYear!: number;
  appointmentMonth!: number;
  appointmentDate!: any;
  appointmentHour!: number;
  appointmentMinutes!: number;

  date = new Date();
  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth();
  currentDate = this.date.getDate();
  constructor(private route: ActivatedRoute, private apppointmentService: AppointmentService, private navigate: NavigationService) {

  }
  ngOnInit() {
    this.apppointmentService.getAppointment(+this.route.snapshot.params['id'])
      .subscribe((appointment) => {
        this.initialStatus = appointment.status;
        this.appointment = {...appointment};
      });
    this.appointmentYear = this.appointment.date.getFullYear();
    this.appointmentMonth = this.appointment.date.getMonth();
    this.appointmentDate = this.appointment.date.getDate();
    this.appointmentHour = this.appointment.date.getHours();
    this.appointmentMinutes = this.appointment.date.getMinutes();
  }

  goToAppointments():Promise<boolean> {
    return this.navigate.goToAppointments();
  }

  onSubmit():Promise<boolean> {
    this.appointment.date = new Date(this.appointmentYear, this.appointmentMonth, this.appointmentDate, this.appointmentHour, this.appointmentMinutes);
    this.apppointmentService.updateAppointment(+this.route.snapshot.params['id'], this.appointment);
    return this.navigate.goToAppointments();
  }

  isConfirmed() {
    if (this.appointment.status === "confirmed" || this.appointment.status === "closed") {
      return true;
    } else {
      return false;
    }
  }
  isClosed() {
    if(this.appointment.status === "closed") {
      return true;
    } else {
      return false;
    }
  }

  hasNoDiagnostic() {
    if(this.appointment.diagnostic === "") {
      return true;
    }
    return false;
  }



  /* Helpers for date related form controls */
  getDaysInMonth(year:number, month: number) {
    month = +month;
    return new Date(year, month+1, 0).getDate();
  }
  resetMonth() {
    this.appointmentMonth = this.currentYear === +this.appointmentYear ?
      this.currentMonth : 0;
  }
  resetDate() {
    this.appointmentDate =
      this.currentYear === Number(this.appointmentYear) &&
      this.currentMonth === Number(this.appointmentMonth) ?
        this.currentDate : 1;
  }
  disabledMonth(nr: number) {
    if(this.currentYear === +this.appointmentYear &&
      nr < this.currentMonth) {
      return true;
    }
    return false;
  }
  getSmallestDate(year:number, month: number) {
    if(this.currentYear === +year && this.currentMonth === +month) {
      return this.currentDate;
    } else return 1;
  }
}
