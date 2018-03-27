import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/users/login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit() {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.returnToEventsPage();
    }

    cancel() {
        this.returnToEventsPage();
    }

    private returnToEventsPage() {
        this.router.navigate(['events']);
    }
}