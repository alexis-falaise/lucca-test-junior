import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api';

import { ActivityRoutingModule } from './activity-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ActivityComponent } from './activity.component';
import { ActivityService } from './activity.service';
import { ActivityResolver } from './activity.resolver';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityListResolver } from './components/activity-list/activity-list.resolver';

@NgModule({
  declarations: [ActivityComponent, ActivityListComponent],
  imports: [
    ApiModule,
    ActivityRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    ActivityService,
    ActivityResolver,
    ActivityListResolver,
  ]
})
export class ActivityModule {}
