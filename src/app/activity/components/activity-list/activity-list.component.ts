import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IActivity } from '../../activity.model';
import { IDestination } from '../../../destination';
import { ContextService } from '../../../context.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  activities: IActivity[];
  cachedActivities: IActivity[];
  destination: IDestination;

  constructor(
    private route: ActivatedRoute,
    private contextService: ContextService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.activities = data.activities;
      this.getCurrentDestination();
    });
  }

  resetDestination() {
    this.contextService.resetCurrentDestination();
  }

  private getCurrentDestination() {
    this.contextService.onDestination()
    .subscribe((destination: IDestination) => {
        this.destination = destination;
        this.filterActivities(destination);
    });
  }

  private filterActivities(destination: IDestination) {
    if (!this.cachedActivities) {
      this.cachedActivities = this.activities;
    }
    if (destination) {
      this.activities = this.cachedActivities.filter(activity => activity.destinationId === destination.id);
    } else {
      this.activities = this.cachedActivities;
    }
  }

}
