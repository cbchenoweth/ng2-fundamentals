import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventListResolverService,
    EventsService,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from "./events/index";
import {NavBarComponent} from "./nav/nav-bar.component";
import {ToastrService} from "./common/toastr.service";
import {AppRoutingModule} from "./app-routing.module";
import {Error404Component} from "./errors/404.component";
import {AuthService} from "./users/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CollapsibleWellComponent} from "./common/collapsible-well.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        SessionListComponent,
        CreateEventComponent,
        CreateSessionComponent,
        NavBarComponent,
        CollapsibleWellComponent,
        Error404Component,

        DurationPipe
    ],
    providers: [
        EventsService,
        ToastrService,
        EventRouteActivatorService,
        {provide: 'canDeactivateCreateEvent', useValue: checkCreateEventComponentDirtyState},
        EventListResolverService,
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