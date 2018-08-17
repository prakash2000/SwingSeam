import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './components/dashboard.component';
import { AppLayoutComponent } from '../shared/app-layout/app-layout.component';
import { routing } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
