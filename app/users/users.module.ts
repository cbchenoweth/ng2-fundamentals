import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserProfileComponent} from "./user-profile.component";
import {UsersRoutingModule} from "./users-routing.module";
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UsersRoutingModule
    ],
    declarations: [
        UserProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})
export class UsersModule {

}