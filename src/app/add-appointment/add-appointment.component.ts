import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../navigation.service";
import {Appointment, IAnimal, IAppointment} from "../appointment.model";
import {AppointmentService} from "../appointment.service";
import {AppointmentDataService} from "../appointment-data.service";
import {AppointmentSorterService} from "../appointment-sorter.service";

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

    appointments: Array<IAppointment> = [];
    existingAnimals: Array<IAnimal> = [];
    selectedAnimalIndex!: number;

    model = new Appointment(0, "", "", "", new Date(), "");

    existsOrNew:string = "exists";
    appointmentYear: number;
    appointmentMonth: number = 0;
    appointmentDate!: any;
    appointmentHour!: number;
    appointmentMinutes!: number;

    date = new Date();
    currentYear = this.date.getFullYear();
    currentMonth = this.date.getMonth();
    currentDate = this.date.getDate();


    constructor(private navigate: NavigationService, private appointmentService: AppointmentService, private data: AppointmentDataService) {

        this.appointmentYear = this.model.date.getFullYear();
        this.appointmentMonth = this.model.date.getMonth();
        this.appointmentDate = this.model.date.getDate();

    }

    ngOnInit() {
      this.appointmentService.getAppointments().subscribe(
        (appointments) => {
          this.appointments = appointments;
        }
      )
      this.existingAnimals = this.data.getExistingAnimals(this.appointments);
    }

    goToAppointments():Promise<boolean> {
        return this.navigate.goToAppointments();
    }

    getAnimalAppointments(animal: IAnimal) {
        return this.data.getAnimalAppointments(this.appointments, animal);
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
    onSubmit():Promise<boolean> {
        this.model.date = new Date(this.appointmentYear, this.appointmentMonth, this.appointmentDate, this.appointmentHour, this.appointmentMinutes);
        this.model.id = this.appointments.length + 1;
        if(this.existsOrNew === "exists") {
            this.model.species = this.existingAnimals[this.selectedAnimalIndex].species;
            this.model.name = this.existingAnimals[this.selectedAnimalIndex].name;
            this.model.breed = this.existingAnimals[this.selectedAnimalIndex].breed;

        }
        this.appointmentService.addAppointment(this.model);
        return this.goToAppointments();
    }
}
