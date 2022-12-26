import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  // Variable del Spiner
  loading = false;

  constructor( private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })

  }

  ngOnInit(): void {
  }

  // Funciones

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'admin' && password == 'admin'){
      //Redireccionar al dashboard
      console.log('Redireccionando')
      this.fakeLoading()
    }
    else{
      //Mostrar mensaje de error
      this.error()
      this.form.reset()
    }
  }

  error(){
    this._snackBar.open('Credenciales Invalidas', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;

    this.loading = true
    setTimeout(() => {

      //Redireccionamos al dasboard
      this.loading = false
      this.router.navigate(['dashboard'])
    }, 1500);
  }

}
