import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Modulos Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        //Angular Material
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        MatTableModule,

        //Reactive Form
        ReactiveFormsModule,
  ],
  exports:[
            //Angular Material
            MatSlideToggleModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatSnackBarModule,
            MatProgressSpinnerModule,
            MatToolbarModule,
            MatIconModule,
            MatTableModule,
    
            //Reactive Form
            ReactiveFormsModule,
  ]
})
export class SharedModule { }
