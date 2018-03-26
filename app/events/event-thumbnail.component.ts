import {Component, Input} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{theEvent?.name}}</h2>
            <div>Date: {{theEvent?.date}}</div>
            <div>Time: {{theEvent?.time}}</div>
            <div>Price: \${{theEvent?.price}}</div>
            <div>
                <span>Location: {{theEvent?.location?.address}}</span>
                <span class="pad-left">{{theEvent?.location?.city}}, {{theEvent?.location?.country}}</span>
            </div>
            <div>Online Url: {{theEvent?.onlineUrl}}</div>
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
    @Input() theEvent: any;
}