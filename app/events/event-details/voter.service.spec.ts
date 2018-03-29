import {VoterService} from "./voter.service";
import {ISession} from "../shared";
import {Observable} from "rxjs/Observable";

describe('VoterService', function () {
    let voterService: VoterService;
    let mockHttp: any;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('removeVoter', () => {
        it('should remove voter from the list of existing voters', function () {
            mockHttp.delete.and.returnValue(Observable.of(false));

            const voterToRemove = 'voterToRemove';
            let eventId = 123;
            let session = <ISession> {id: 321, voters: [voterToRemove, 'someOtherVoter']};

            voterService.removeVoter(eventId, session, voterToRemove);

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('someOtherVoter');
        });
    });
});