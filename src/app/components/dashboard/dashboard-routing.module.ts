import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { ActionsComponent } from './actions/actions.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    {path: '', component: UsersComponent},
    {path: 'actions', component: ActionsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
