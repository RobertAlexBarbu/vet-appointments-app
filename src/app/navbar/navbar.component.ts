import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(private router: Router) {

    }
    public isActive(route: string) {
        if(this.router.url.includes(route)) {
            return true;
        }
        return false;
    }
}
