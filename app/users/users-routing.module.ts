import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserProfileComponent} from "./user-profile.component";
import {LoginComponent} from "./login.component";

const usersRoutes: Routes = [
    {path: 'profile', component: UserProfileComponent},
    {path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(usersRoutes)
    ]
})
export class UsersRoutingModule {

}