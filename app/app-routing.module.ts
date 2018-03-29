import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Error404Component} from "./errors/404.component";
import {
    CreateEventComponent, EventListResolverService, EventsListComponent, EventDetailsComponent,
    CreateSessionComponent, EventResolverService
} from "./events/index";

const appRoutes: Routes = [
    {path: 'events/sessions/new', component: CreateSessionComponent},
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolverService}},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
    {path: 'errors/404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}