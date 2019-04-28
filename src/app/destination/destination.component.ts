import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ActivityService } from '../activity/activity.service';

import { IDestination } from './destination.model';
import { IActivity } from '../activity/activity.model';

@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
	destination: IDestination;
	activities$: Observable<IActivity[]>;
	get bgImg() { return `url('${this.destination.bg}')`; }
	constructor(
		private activityService: ActivityService,
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.route.data
		.subscribe((data: { destination: IDestination }) => {
			this.destination = data.destination;
		});
		this.activities$ = this.activityService.getActivitiesByDestinationId(this.destination.id);
	}
}
