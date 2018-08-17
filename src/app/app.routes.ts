import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './shared/app-layout/app-layout.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppLayoutComponent,
  //   children: [
  //     { path: '', component: AppComponent }
  //   ]
  // },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './account/account.module#AccountModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
  // { path: 'lazy', loadChildren: 'lazy/lazy.module#LazyModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
