import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppointmentsComponent} from "./appointments/appointments.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {AddAppointmentComponent} from "./add-appointment/add-appointment.component";
import {EditAppointmentComponent} from "./edit-appointment/edit-appointment.component";
import {FilterAppointmentsComponent} from "./filter-appointments/filter-appointments.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'appointments',
        pathMatch: "full"
    },
    {
        path: 'appointments',
        component: AppointmentsComponent,
        children: [

        ]
    },
    {
      path: 'appointments/new',
      component: AddAppointmentComponent
    },
    {
        path: 'statistics',
        component: StatisticsComponent,
    },
    {
      path: 'appointments/edit/:id',
      component: EditAppointmentComponent
    },
    {
      path: 'appointments/filter',
      component: FilterAppointmentsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
