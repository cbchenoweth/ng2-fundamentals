import {Injectable} from "@angular/core";
import {ISession} from "../shared";

@Injectable()
export class VoterService {

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    removeVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter(v => v !== voterName);
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(v => v === voterName);
    }
}