import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/users/user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
    private profileForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit(): void {
        let currentUser = this.authService.currentUser;

        let firstName = new FormControl(currentUser && currentUser.firstName);
        let lastName = new FormControl(currentUser && currentUser.lastName);
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    cancel() {
        this.navigateToEventsRoute();
    }

    saveProfile(formValues: any) {
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.navigateToEventsRoute();
    }

    private navigateToEventsRoute() {
        this.router.navigate(['events']);
    }
}