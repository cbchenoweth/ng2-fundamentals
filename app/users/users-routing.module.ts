import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserProfileComponent} from "./user-profile.component";

const usersRoutes: Routes = [
    {path: 'profile', component: UserProfileComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(usersRoutes)
    ]
})
export class UsersRoutingModule {

}