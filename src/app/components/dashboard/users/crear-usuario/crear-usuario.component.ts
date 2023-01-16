import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  sexo: any[] = [
    'Masculino', 'Femenino'
  ];
form: FormGroup;



  constructor(private fb: FormBuilder, private _usauriosService: UsuarioService, private router: Router, private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }


  agregarUsuario(){
    if ( this.form.value.usuario && this.form.value.nombre && this.form.value.apellido && this.form.value.sexo){

    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    }

    this._usauriosService.agregarUsuario(user);
    this.router.navigate(['/dashboard/'])

  this._snackBar.open('El usuario fue agregado con exito', '', {
    duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  })
}
else{
  this.router.navigate(['/dashboard/'])

  this._snackBar.open('Ha salido al Dashboard con exito', '', {
    duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  })
}
}
  
  }  
