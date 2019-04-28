import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ActivityService } from '../../activity.service';

import { IActivity } from '../../activity.model';

@Injectable()
export class ActivityListResolver implements Resolve<IActivity[]> {
	constructor(protected activityService: ActivityService) {}
	resolve(route: ActivatedRouteSnapshot) {
		return this.activityService.getActivities();
	}
}
