import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: Http) {

    }

    loginUser(username: string, password: string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        const loginCredentials = {username: username, password: password};
        return this.http.post(`/api/login`, loginCredentials, options)
            .do(response => {
                if (response) {
                    this.currentUser = <IUser> response.json().user;
                }
            })
            .catch(error => Observable.of(false));
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        let currentUser = this.currentUser;

        currentUser.firstName = firstName;
        currentUser.lastName = lastName;


        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
            .map((response: any) => {
                if (response._body) {
                    return response.json();
                }
                else {
                    return null;
                }
            })
            .subscribe(user => {
                if (user) {
                    this.currentUser = user;
                }
            });
    }
}