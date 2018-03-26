import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{theEvent.name}}</h2>
            <div>Date: {{theEvent.date}}</div>
            <div>Time: {{theEvent.time}}</div>
            <div>Price: \${{theEvent.price}}</div>
            <div>
                <span>Location: {{theEvent.location.address}}</span>
                <span>&nbsp;</span>
                <span>{{theEvent.location.city}}, {{theEvent.location.country}}</span>
            </div>
            <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
        </div>
    `
})
export class EventThumbnailComponent {
    @Input() theEvent: any;
    @Output() eventClick = new EventEmitter();

    someProperty = 'some value';

    handleClickMe() {
        this.eventClick.emit(this.theEvent.name);
    }

    logFoo() {
        console.log('foo');
    }
}