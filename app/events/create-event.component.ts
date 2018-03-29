import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {EventsService} from "./shared/index";

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [
        `
            em {float: right; color: #E05C65; padding-left: 10px;}
            .error input {background-color: #E3C3C5;}
            .error ::-webkit-input-placeholder {color: #999;}
        `
    ]
})
export class CreateEventComponent implements OnInit {
    isDirty = true;

    constructor(private eventsService: EventsService, private router: Router) {
    }

    ngOnInit(): void {
    }

    saveEvent(formValues) {
        this.eventsService.saveEvent(formValues).subscribe(event => {
            this.isDirty = false;
            this.navigateToEventsList();
        });
    }

    cancel() {
        this.navigateToEventsList();
    }

    private navigateToEventsList() {
        this.router.navigate(['/events']);
    }
}