import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/nav-bar.component";
import {EventsService} from "./events/shared/events.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {AppRoutingModule} from "./app-routing.module";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivatorService} from "./events/event-details/event-route-activator.service";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        NavBarComponent,
        Error404Component
    ],
    providers: [
        EventsService,
        ToastrService,
        EventRouteActivatorService
    ],
    bootstrap: [
        EventsAppComponent
    ]
})
export class AppModule {

}