import {SessionListComponent} from "./session-list.component";
import {ISession} from "../shared";

describe('SessionListComponent', function () {
    let sessionListComponent: SessionListComponent;
    let mockAuthService;
    let mockVoterService;

    beforeEach(() => {
        sessionListComponent = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', function () {
        it('should filter sessions', function () {
            sessionListComponent.sortBy = 'name';
            sessionListComponent.eventId = 123;

            sessionListComponent.sessions = <ISession[]>[
                {name: 'session1', level: 'beginner'},
                {name: 'session2', level: 'beginner'},
                {name: 'session3', level: 'advanced'},
            ];
            sessionListComponent.filterBy = 'beginner';

            sessionListComponent.ngOnChanges({});

            expect(sessionListComponent.visibleSessions.length).toBe(2);
            expect(sessionListComponent.visibleSessions.length).toBe(2);
        });

        it('should sort sessions', function () {
            sessionListComponent.filterBy = 'all';
            sessionListComponent.eventId = 123;

            sessionListComponent.sessions = <ISession[]>[
                {name: 'session2', level: 'beginner'},
                {name: 'session1', level: 'beginner'},
                {name: 'session4', level: 'beginner'},
                {name: 'session3', level: 'advanced'},
            ];
            sessionListComponent.sortBy = 'name';


            sessionListComponent.ngOnChanges({});

            expect(sessionListComponent.visibleSessions[0].name).toBe('session1');
            expect(sessionListComponent.visibleSessions[1].name).toBe('session2');
            expect(sessionListComponent.visibleSessions[2].name).toBe('session3');
            expect(sessionListComponent.visibleSessions[3].name).toBe('session4');
        });
    });
});