import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AppointmentsMenuComponent } from './appointments/appointments-menu/appointments-menu.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { AppointmentComponent } from './appointments/appointments-list/appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    StatisticsComponent,
    NavbarComponent,
    HeaderComponent,
    AppointmentsMenuComponent,
    AppointmentsListComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
