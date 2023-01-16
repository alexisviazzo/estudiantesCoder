import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  sexo: any[] = [
    'Masculino', 'Femenino'
  ];
  

  // form = ''

  // firstNameControl = new FormControl('')
  // lastNameControl = new FormControl('')
  // studentForm = new FormGroup({
  //   firstName: this.firstNameControl,
  //   lasName: this.firstNameControl,
  // })

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
    throw new Error('Method not implemented.');
  }


  agregarUsuario(){

    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    }

    

    this._snackBar.open('El usuario fue actualizado con exito', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

    this._usauriosService.agregarUsuario(user);
    this.router.navigate(['/dashboard'])
  }

  

}