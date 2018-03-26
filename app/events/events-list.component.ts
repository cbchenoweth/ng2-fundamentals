import {Component} from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            <event-thumbnail #thumbnail
                    [theEvent]="theEvent"
                    (eventClick)="handleEventClicked($event)">
            </event-thumbnail>
            <h3>{{thumbnail.someProperty}}</h3>
            <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log 'foo' from thumbnail</button>
        </div>
    `
})
export class EventsListComponent {
    theEvent = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assests/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    };

    handleEventClicked(data: any) {
        console.log(`received: ${data}`);
    }
}