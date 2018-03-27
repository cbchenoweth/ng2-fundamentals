import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Error404Component} from "./errors/404.component";
import {CreateEventComponent, EventListResolverService, EventsListComponent, EventDetailsComponent, EventRouteActivatorService} from "./events/index";

const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
    {path: 'errors/404', component: Error404Component},
    {path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
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