import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserProfileComponent} from "./user-profile.component";
import {UsersRoutingModule} from "./users-routing.module";

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule
    ],
    declarations: [
        UserProfileComponent
    ],
    providers: [

    ]
})
export class UsersModule {

}