import {Component, OnInit} from "@angular/core";
import {EventsService} from "./shared/events.service";
import {ToastrService} from "../common/toastr.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            
            <div class="row">
                <div class="col-md-5" *ngFor="let theEvent of events">
                    <event-thumbnail
                            [theEvent]="theEvent" (click)="handleThumbnailClick(theEvent.name)">
                    </event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    private events: any[];

    constructor(private eventService: EventsService, private toastrService: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}