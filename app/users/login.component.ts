import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/users/login.component.html',
    styles: [
        `
            em {float: right; color: #E05C65; padding-left: 10px;}
        `
    ]
})
export class LoginComponent implements OnInit {
    loginInvalid = false;
    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit() {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(response => {
            if(response) {
                this.returnToEventsPage();
            } else {
                this.loginInvalid = true;
            }
        });
    }

    cancel() {
        this.returnToEventsPage();
    }

    private returnToEventsPage() {
        this.router.navigate(['events']);
    }
}