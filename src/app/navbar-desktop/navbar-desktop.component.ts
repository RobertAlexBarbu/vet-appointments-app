import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.css']
})
export class NavbarDesktopComponent {
    constructor(private router: Router) {

    }
    public isActive(route: string) {
        if(this.router.url.includes(route)) {
            return true;
        }
        return false;
    }
}
