import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {SessionListComponent} from "./session-list.component";
import {AuthService} from "../../users/auth.service";
import {VoterService} from "./voter.service";
import {DurationPipe, ISession} from "../shared/index";
import {By} from "@angular/platform-browser";
import {UpvoteComponent} from "./upvote.component";
import {CollapsibleWellComponent} from "../../common/collapsible-well.component";

describe('SessionListComponent', function () {
    let fixture: ComponentFixture<SessionListComponent>;
    let component: SessionListComponent;
    let element: HTMLElement;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {userName: ''}
        };
        let mockVoterService = {
            userHasVoted: () => false
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                CollapsibleWellComponent,
                DurationPipe
            ],
            providers: [
                {provide: AuthService, useValue: mockAuthService},
                {provide: VoterService, useValue: mockVoterService},
            ],
            schemas: []
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {
        it('should have correct session title', function () {
            const session1 = {
                id: 123,
                name: 'session1',
                presenter: 'presenter1',
                duration: 1,
                level: 'beginner',
                abstract: 'description',
                voters: []
            };
            component.sessions = [session1];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges({});
            fixture.detectChanges();

            expect(element.querySelector('[collapsible-well-title]').textContent).toContain(session1.name);
            expect(debugElement.query(By.css('[collapsible-well-title]')).nativeElement.textContent).toContain(session1.name); // different way to look up html stuff
        });
    });
});