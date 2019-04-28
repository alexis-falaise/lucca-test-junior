import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.router';
import { CommonModule } from '@angular/common';
import { DestinationModule } from '../destination';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		HomeRoutingModule,
		ReactiveFormsModule,
		CommonModule,
		DestinationModule,
		SharedModule,
	],
	declarations: [
		HomeComponent,
	],
})
export class HomeModule {}
