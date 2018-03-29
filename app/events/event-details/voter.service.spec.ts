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
        it('should remove voter from the list of existing voters on the client', function () {
            mockHttp.delete.and.returnValue(Observable.of(false));

            const voterToRemove = 'voterToRemove';
            let eventId = 123;
            let session = <ISession> {id: 321, voters: [voterToRemove, 'someOtherVoter']};

            voterService.removeVoter(eventId, session, voterToRemove);

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('someOtherVoter');
        });

        it('should call to delete the voter on the server side', function () {
            mockHttp.delete.and.returnValue(Observable.of(false));

            const voterToRemove = 'voterToRemove';
            let eventId = 123;
            let session = <ISession> {id: 321, voters: [voterToRemove, 'someOtherVoter']};

            voterService.removeVoter(eventId, session, voterToRemove);

            expect(mockHttp.delete).toHaveBeenCalledWith(`/api/events/${eventId}/sessions/${session.id}/voters/${voterToRemove}`);
        });
    });

    describe('addVoter', function () {
        it('should call to create the voter on the server side', function () {
            mockHttp.post.and.returnValue(Observable.of({}));

            const voterToAdd = 'newVoter';
            let eventId = 123;
            let session = <ISession> {id: 321, voters: ['someOtherVoter']};

            voterService.addVoter(eventId, session, voterToAdd);

            expect(mockHttp.post).toHaveBeenCalledWith(
                `/api/events/${eventId}/sessions/${session.id}/voters/${voterToAdd}`,
                jasmine.any(Object),
                jasmine.any(Object));
        });
    });
});