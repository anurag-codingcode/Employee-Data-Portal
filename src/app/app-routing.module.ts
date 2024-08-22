import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path:'',
  component:SignUpComponent
},{
  path:'basicinfo',
  component:BasicInfoComponent
},{
  path:'dashboard',
  component:DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
