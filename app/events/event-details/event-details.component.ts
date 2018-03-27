import {Component, OnInit} from "@angular/core";
import {EventsService} from "../shared/events.service";
import {ActivatedRoute} from "@angular/router";

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
    constructor(private eventService: EventsService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        this.theEvent = this.eventService.getEvent(id);
    }
}