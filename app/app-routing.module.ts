import {NgModule} from "@angular/core";
import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {RouterModule, Routes} from "@angular/router";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivatorService} from "./events/event-details/event-route-activator.service";
import {EventListResolverService} from "./events/event-list-resolver.service";

const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
    {path: 'errors/404', component: Error404Component},
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