import {Injectable} from "@angular/core";
import {ISession} from "../shared";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class VoterService {

    constructor(private http: Http) {

    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        return this.http.post(url, {}, options)
            .map(response => response.json())
            .catch(this.handleError)
            .subscribe();
    }

    removeVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(v => v !== voterName);

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        return this.http.delete(url)
            .catch(this.handleError)
            .subscribe();
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(v => v === voterName);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}