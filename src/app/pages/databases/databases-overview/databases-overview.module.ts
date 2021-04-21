import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabasesOverviewRoutes } from './databases-overview.routing';
import { DatabasesOverviewComponent } from './databases-overview.component';


@NgModule({
  declarations: [DatabasesOverviewComponent],
  imports: [
    CommonModule,
    DatabasesOverviewRoutes
  ]
})
export class DatabasesOverviewModule { }
