import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {EventsService} from "./shared/events.service";
import "rxjs/add/operator/map";

@Injectable()
export class EventResolverService implements Resolve<any> {
    constructor(private eventService: EventsService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.eventService.getEvent(route.params['id']);
    }

}