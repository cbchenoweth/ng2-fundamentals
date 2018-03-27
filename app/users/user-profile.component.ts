import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    templateUrl: 'app/users/user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
    private profileForm: FormGroup;

    constructor() {

    }

    ngOnInit(): void {
        let firstName = new FormControl();
        let lastName = new FormControl();
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }
}