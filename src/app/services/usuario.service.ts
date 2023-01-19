import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  [x: string]: any;

  alumnos: Usuario[] = [
    {usuario: '1', nombre: 'Alexis', apellido: 'Viazzo', sexo: 'masculino'},
    {usuario: '2', nombre: 'Vanessa', apellido: 'Sandes', sexo: 'femenino'},
    {usuario: '3', nombre: 'Jonathan', apellido: 'Barcelo', sexo: 'masculino'},
    {usuario: '4', nombre: 'Federico', apellido: 'Viazzo', sexo: 'masculino'},
    {usuario: '5', nombre: 'Martin', apellido: 'Viazzo', sexo: 'masculino'},
    {usuario: '6', nombre: 'Helen', apellido: 'Barcelo', sexo: 'femenino'},
    {usuario: '7', nombre: 'Elena', apellido: 'Albano', sexo: 'femenino'},
    {usuario: '8', nombre: 'Andres', apellido: 'Viazzo', sexo: 'masculino'},
    {usuario: '9', nombre: 'Jaqueline', apellido: 'Barcelo', sexo: 'femenino'},
    {usuario: '10', nombre: 'Maria', apellido: 'Dutra', sexo: 'femenino'},
    {usuario: '11', nombre: 'Juan', apellido: 'Gomez', sexo: 'masculino'},
  
  ];

  constructor() { }

  getUsuario() {
    return this.alumnos.slice();
  }

  eliminarUsuario(index: number){
    this.alumnos.splice(index, 1)
  }

  agregarUsuario(usuario: Usuario){
    this.alumnos.unshift(usuario);
  }


}
