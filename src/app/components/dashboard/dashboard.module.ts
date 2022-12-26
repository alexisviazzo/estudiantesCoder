import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UsersComponent } from './users/users.component';
import { ActionsComponent } from './actions/actions.component';



@NgModule({
  declarations: [

  

  

  
    UsersComponent,
                ActionsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
