import {Component, OnInit} from "@angular/core";
import {EventsService} from "./shared/events.service";

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            
            <div class="row">
                <div class="col-md-5" *ngFor="let theEvent of events">
                    <event-thumbnail
                            [theEvent]="theEvent">
                    </event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    private events: any[];

    constructor(private eventService: EventsService) {
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
}