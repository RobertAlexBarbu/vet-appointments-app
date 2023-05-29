import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  newAppointment():Promise<boolean> {
    return this.router.navigate(["appointments", "new"]);
  }

}
