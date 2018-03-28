import {Component, Input} from "@angular/core";
import {IEvent} from "./shared";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail" 
             [routerLink]="['/events', theEvent?.id]" >
            <h2>{{theEvent?.name | uppercase}}</h2>
            <div>Date: {{theEvent?.date | date:'shortDate'}}</div>
            <div [ngStyle]="getStartTimeStyle()"
                 [ngSwitch]="theEvent?.time">
                Time: {{theEvent?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: {{theEvent?.price | currency:'USD':true}}</div>
            <div *ngIf="theEvent?.location">
                <span>Location: {{theEvent?.location?.address}}</span>
                <span class="pad-left">{{theEvent?.location?.city}}, {{theEvent?.location?.country}}</span>
            </div>
            <div *ngIf="theEvent?.onlineUrl">Online Url: {{theEvent?.onlineUrl}}</div>
        </div>
    `,
    styles: [
        `
            .pad-left { margin-left: 10px; }
            .well div { color: #888; }
            .thumbnail {min-height: 210px;}
        `
    ]
})
export class EventThumbnailComponent {
    @Input() theEvent: IEvent;

    getStartTimeStyle() {
        let isEarlyStartTime = this.theEvent && this.theEvent.time === '8:00 am';
        if(isEarlyStartTime) {
            return {color: '#008800', 'font-weight': 'bold'};
        }
        return {};
    }
}