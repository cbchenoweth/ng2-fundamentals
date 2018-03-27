import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {IUser} from "./user.model";

@Component({
    templateUrl: 'app/users/user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
    private profileForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit(): void {
        let currentUser = this.authService.currentUser || {} as IUser;

        let firstName = new FormControl(currentUser.firstName, Validators.required);
        let lastName = new FormControl(currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    cancel() {
        this.navigateToEventsRoute();
    }

    saveProfile(formValues: any) {
        if(this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.navigateToEventsRoute();
        }
    }

    private navigateToEventsRoute() {
        this.router.navigate(['events']);
    }
}