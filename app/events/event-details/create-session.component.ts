import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ISession} from "../shared";

@Component({
    templateUrl: 'app/events/event-details/create-session.component.html'
})
export class CreateSessionComponent implements OnInit {
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    newSessionForm: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }


    saveSession(formValues: any) {
        let newSession: ISession = {
            abstract: formValues.abstract,
            duration: +formValues.duration,
            id: undefined,
            level: formValues.level,
            name: formValues.name,
            presenter: formValues.presenter,
            voters: []
        };

        console.log(formValues);
    }
}