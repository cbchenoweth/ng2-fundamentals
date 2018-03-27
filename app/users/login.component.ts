import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";

@Component({
    templateUrl: 'app/users/login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService) {

    }

    ngOnInit() {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
    }
}