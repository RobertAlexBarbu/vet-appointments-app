import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../appointment.service";
import {AppointmentStatisticsService, IStat} from "../appointment-statistics.service";
import {IAppointment} from "../appointment.model";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  appointments: Array<IAppointment> = [];
  animalStats: Array<IStat> = [];
  statusStats: Array<IStat> = [];

  timeStats: Array<IStat> = [];

  constructor(private appointmentService: AppointmentService, private statisticsService: AppointmentStatisticsService) {

  }

  ngOnInit() {
    this.appointmentService.getAppointments().subscribe((appointments) => {
      this.appointments = appointments;
    });
    this.animalStats = this.statisticsService.getAnimalStats(this.appointments);
    this.statusStats = this.statisticsService.getStatusStats(this.appointments);
    this.timeStats = this.statisticsService.getTimeStats(this.appointments);
  }
}
