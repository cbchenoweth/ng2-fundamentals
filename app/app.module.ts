import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/nav-bar.component";
import {EventsService} from "./events/shared/events.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailsComponent} from "./events/event-details/event-details.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent
    ],
    providers: [
        EventsService,
        ToastrService
    ],
    bootstrap: [
        EventsAppComponent
    ]
})
export class AppModule {

}