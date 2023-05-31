import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppointmentsComponent} from "./appointments/appointments.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {AddAppointmentComponent} from "./add-appointment/add-appointment.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'appointments',
        pathMatch: "full"
    },
    {
        path: 'appointments',
        component: AppointmentsComponent,
    },
    {
      path: 'appointments/new',
      component: AddAppointmentComponent
    },
    {
        path: 'statistics',
        component: StatisticsComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
