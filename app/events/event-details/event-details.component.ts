import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {EventsService, IEvent, ISession} from "../shared/index";

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [
        `
            .container {padding-left: 20px; padding-right: 20px;}
            .event-image {height: 100px}
            a {cursor: pointer}
        `
    ]
})
export class EventDetailsComponent implements OnInit {
    theEvent: IEvent;
    addMode: boolean;
    filterBy = 'all';
    sortBy = 'name';

    constructor(private eventService: EventsService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        this.theEvent = this.eventService.getEvent(id);
    }

    addSession() {
        this.addMode = true;
    }

    addNewSession(newSession: ISession) {
        const maxCurrentId = Math.max.apply(null, this.theEvent.sessions.map(s => s.id));
        newSession.id = maxCurrentId + 1;
        this.theEvent.sessions.push(newSession);
        this.eventService.updateEvent(this.theEvent);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}