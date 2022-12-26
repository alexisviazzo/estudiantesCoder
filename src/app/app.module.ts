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






@NgModule({
  declarations: [
    AppComponent,

    //Componentes
    LoginComponent,
     DashboardComponent,
     ErrorComponent,
     NavComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
