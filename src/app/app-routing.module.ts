import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuardGuard } from './Auth/auth-guard.guard';

const routes: Routes = [{
  path:'',
  component:SignUpComponent
},{
  path:'basicinfo',
  component:BasicInfoComponent,
  canActivate:[authGuardGuard]
},{
  path:'dashboard',
  component:DashboardComponent,
  canActivate:[authGuardGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
