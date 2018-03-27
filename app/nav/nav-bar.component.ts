import {Component, OnInit} from "@angular/core";
import {AuthService} from "../users/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/nav-bar.component.html',
    styles: [
        `
            .nav.navbar-nav {font-size: 15px;}
            #searchForm {margin-right: 100px}
            @media (max-width: 1200px) {#searchForm {display: none}}
            li > a.active {color: #F97924;}
        `
    ]
})
export class NavBarComponent implements OnInit {
    constructor(private authService: AuthService) {

    }

    ngOnInit(): void {
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

    getCurrentUserFirstName() {
        return this.authService.currentUser.firstName;
    }

}