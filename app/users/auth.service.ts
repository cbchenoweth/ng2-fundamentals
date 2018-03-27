import {Injectable} from "@angular/core";
import {IUser} from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor() {

    }

    loginUser(username: string, password: string) {
        this.currentUser = {
            id: 123,
            userName: username,
            firstName: 'FirstName',
            lastName: 'lastName'
        }
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        let currentUser = this.currentUser;

        currentUser.firstName = firstName;
        currentUser.lastName = lastName;
    }
}