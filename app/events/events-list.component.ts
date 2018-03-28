import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {EventsService, IEvent} from "./shared/index";

@Component({
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>

            <div class="row">
                <div class="col-md-5" *ngFor="let theEvent of events">
                    <event-thumbnail [theEvent]="theEvent"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    private events: IEvent[];

    constructor(private eventService: EventsService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }
}