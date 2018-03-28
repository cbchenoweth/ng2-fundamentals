import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {ISession} from "../shared/index";

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnInit, OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    constructor() {

    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.sessions) {
            this.filterSessions(this.filterBy);

            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
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

function sortByNameAsc(s1: ISession, s2: ISession) {
    const s1Name = s1.name.toLowerCase();
    const s2Name = s2.name.toLowerCase();

    if(s1Name > s2Name) return 1;
    if(s1Name === s2Name) return 0;
    if(s1Name < s2Name) return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
