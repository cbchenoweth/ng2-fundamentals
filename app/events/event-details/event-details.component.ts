import {Component, OnInit} from "@angular/core";
import {EventsService} from "../shared/events.service";

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [
        `
            .container {padding-left: 20px; padding-right: 20px;}
            .event-image {height: 100px}
        `
    ]
})
export class EventDetailsComponent implements OnInit {
    private theEvent: any;
    constructor(private eventService: EventsService) {

    }

    ngOnInit(): void {
        this.theEvent = this.eventService.getEvent(1);
    }
}