import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NavbarDesktopComponent } from './navbar-desktop/navbar-desktop.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    StatisticsComponent,
    NavbarDesktopComponent,
    NavbarMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
