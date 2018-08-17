import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from '../shared/app-layout/app-layout.component';
import { DashboardComponent } from './components/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
