import { NgModule } from '@angular/core';
import { DestinationService } from './destination.service';
import { DestinationRoutingModule } from './destination.router';
import { DestinationComponent } from './destination.component';
import { DestinationGalleryComponent } from './components';
import { DestinationResolver } from './destination.resolver';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api';
import { SharedModule } from '../shared/shared.module';
import { ActivityModule } from '../activity/activity.module';

@NgModule({
	imports: [
		DestinationRoutingModule,
		ActivityModule,
		CommonModule,
		HttpClientModule,
		ApiModule,
		SharedModule,
	],
	providers: [
		DestinationService,
		DestinationResolver,
	],
	declarations: [
		DestinationComponent,
		DestinationGalleryComponent,
	],
})
export class DestinationModule {}
