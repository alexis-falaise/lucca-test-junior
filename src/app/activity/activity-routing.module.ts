import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityComponent } from './activity.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityResolver } from './activity.resolver';
import { ActivityListResolver } from './components/activity-list/activity-list.resolver';

const routes: Routes = [
	{ path: '', component: ActivityListComponent, resolve: { activities: ActivityListResolver }},
	{ path: ':id', component: ActivityComponent, resolve: { activity: ActivityResolver }},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	exports: [
		RouterModule,
	],
})
export class ActivityRoutingModule {}
