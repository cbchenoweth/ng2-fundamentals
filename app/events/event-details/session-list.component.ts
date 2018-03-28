import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {ISession} from "../shared/index";

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnInit, OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];

    constructor() {

    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    private filterSessions(filterBy: string) {
        if(filterBy === 'all') {
            this.visibleSessions = this.sessions.slice();
        } else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLowerCase() === filterBy);
        }
    }
}