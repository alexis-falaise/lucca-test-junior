import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IActivity } from './activity.model';
import { ActivityService } from './activity.service';

@Injectable()
export class ActivityResolver implements Resolve<IActivity> {
	constructor(protected activityService: ActivityService) {}
	resolve(route: ActivatedRouteSnapshot) {
		const id = route.paramMap.get('id');
		return this.activityService.getActivityById(id);
	}
}
