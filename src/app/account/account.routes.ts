import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginLayoutComponent } from '../shared/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
