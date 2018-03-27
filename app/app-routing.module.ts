import {NgModule} from "@angular/core";
import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {RouterModule, Routes} from "@angular/router";
import {CreateEventComponent} from "./events/create-event.component";

const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: 'events', component: EventsListComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}