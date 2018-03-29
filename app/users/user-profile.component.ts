import {Component, Inject, OnInit} from "@angular/core";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {IUser} from "./user.model";
import {Toastr, TOASTR_TOKEN} from "../common/toastr.service";

@Component({
    templateUrl: 'app/users/user-profile.component.html',
    styles: [
        `
            em {float: right; color: #E05C65; padding-left: 10px;}
            .error input {background-color: #E3C3C5;}
            .error ::-webkit-input-placeholder {color: #999;}
        `
    ]
})
export class UserProfileComponent implements OnInit {
    private profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(
        private authService: AuthService,
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr) {

    }

    ngOnInit(): void {
        let currentUser = this.authService.currentUser || {} as IUser;

        this.firstName = new FormControl(currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    cancel() {
        this.navigateToEventsRoute();
    }

    saveProfile(formValues: any) {
        if(this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
                this.toastr.success('Profile Saved!');
            });
        }
    }

    private navigateToEventsRoute() {
        this.router.navigate(['events']);
    }

    firstNameIsValid() {
        return this.controlIsValid(this.firstName);
    }

    lastNameIsValid() {
        return this.controlIsValid(this.lastName);
    }

    private controlIsValid(control: AbstractControl) {
        return control.valid || control.untouched;
    }
}