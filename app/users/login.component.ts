import {Component, OnInit} from "@angular/core";

@Component({
    templateUrl: 'app/users/login.component.html'
})
export class LoginComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {

    }

    login(formValues) {
        console.log(formValues);
    }
}