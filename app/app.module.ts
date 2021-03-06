import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolverService,
    EventsService,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe, EventResolverService
} from "./events/index";
import {NavBarComponent} from "./nav/nav-bar.component";
import {Toastr, TOASTR_TOKEN} from "./common/toastr.service";
import {AppRoutingModule} from "./app-routing.module";
import {Error404Component} from "./errors/404.component";
import {AuthService} from "./users/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CollapsibleWellComponent} from "./common/collapsible-well.component";
import {JQUERY_TOKEN} from "./common/jQuery.service";
import {SimpleModalComponent} from "./common/simple-modal.component";
import {ModalTriggerDirective} from "./common/modal-trigger.directive";
import {UpvoteComponent} from "./events/event-details/upvote.component";
import {VoterService} from "./events/event-details/voter.service";
import {LocationValidatorDirective} from "./events/location-validator.directive";
import {HttpModule} from "@angular/http";

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        SessionListComponent,
        UpvoteComponent,
        CreateEventComponent,
        CreateSessionComponent,
        NavBarComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        Error404Component,

        DurationPipe,

        ModalTriggerDirective,
        LocationValidatorDirective
    ],
    providers: [
        EventsService,
        VoterService,
        {provide: TOASTR_TOKEN, useValue: toastr},
        {provide: JQUERY_TOKEN, useValue: jQuery},
        {provide: 'canDeactivateCreateEvent', useValue: checkCreateEventComponentDirtyState},
        EventListResolverService,
        EventResolverService,
        AuthService
    ],
    bootstrap: [
        EventsAppComponent
    ]
})
export class AppModule {

}

function checkCreateEventComponentDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('event not saved!  do you really want to cancel?');
    return true;
}