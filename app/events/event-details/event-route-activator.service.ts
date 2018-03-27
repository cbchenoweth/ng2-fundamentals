import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {EventsService} from "../shared/events.service";

@Injectable()
export class EventRouteActivatorService implements CanActivate {
    constructor(private eventService: EventsService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);

        if(!eventExists) {
            this.router.navigate(['errors/404']);
        }

        return eventExists;
    }
}