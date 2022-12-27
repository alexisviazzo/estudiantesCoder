import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { ActionsComponent } from './actions/actions.component';
import { CrearUsuarioComponent } from './users/crear-usuario/crear-usuario.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    {path: '', component: UsersComponent},
    {path: 'actions', component: ActionsComponent},
    {path: 'crear-usuario', component: CrearUsuarioComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
