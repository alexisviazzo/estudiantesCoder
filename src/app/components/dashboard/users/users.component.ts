import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../../interfaces/usuario';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { formatDate } from '@angular/common';

// Importacion datos API
import { UserInterface } from 'src/app/models/user.interface';
import { DataService } from './http/data.service';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserInterface[] | undefined;

  listUsuarios: Usuario[] = []

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  dialogService: any;
  



  constructor(
    private dataSvc: DataService,
    private readonly dialogServices: MatDialog, 
    private _usuarioService: UsuarioService, 
    private _snackBar: MatSnackBar){ }

  ngOnInit(): void {
    this.cargarUsuarios()
    this.dataSvc.getUsers().subscribe((data) => (this.users = data));
  }

  cargarUsuarios() {
    this.listUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number){

    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios()
    this._snackBar.open('El usuario fue eliminado con exito', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }

editarUsuario(){
  console.log("Editando")
}
}


