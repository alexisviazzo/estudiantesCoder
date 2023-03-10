import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { NavComponent } from './components/dashboard/nav/nav.component';

import { AgregandoNombrePipe } from './components/dashboard/nav/agregando-nombre.pipe';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

    //Componentes
    LoginComponent,
     DashboardComponent,
     ErrorComponent,
     NavComponent,
     AgregandoNombrePipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
