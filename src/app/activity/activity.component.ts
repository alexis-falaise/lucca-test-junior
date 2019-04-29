import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContextService } from '../context.service';

import { IActivity } from './activity.model';
import { IDestination } from '../destination';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  destination: IDestination;
  activity: IActivity;

  get bgImg() { return `url('${this.destination ? this.destination.bg : this.activity.thumbnail}')`; }

  constructor(
    private route: ActivatedRoute,
    private contextService: ContextService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.activity = data.activity;
      this.getCurrentDestination();
    });
  }

  private getCurrentDestination() {
    this.contextService.onDestination()
    .subscribe((destination: IDestination) => {
      if (destination && destination.id === this.activity.destinationId) {
        this.destination = destination;
      }
    });
  }

}
