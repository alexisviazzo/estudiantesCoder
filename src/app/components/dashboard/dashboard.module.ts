import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { ActionsComponent } from './actions/actions.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersComponent } from './users/users.component';
import { CrearUsuarioComponent } from './users/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './users/editar-usuario/editar-usuario.component';
import { BarraComponent } from './nav/barra/barra.component';
import { HttpComponent } from './users/http/http.component';


@NgModule({
  declarations: [
    ActionsComponent,
    UsersComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    BarraComponent,
    HttpComponent,
  

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  exports:[
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
