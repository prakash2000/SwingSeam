import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { LoginLayoutComponent } from '../shared/login-layout/login-layout.component';
import { routing } from './account.routes';

@NgModule({
  declarations: [
    LoginComponent,
    LoginLayoutComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AccountModule { }
