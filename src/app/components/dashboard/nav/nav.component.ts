import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../interfaces/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menu: Menu[] = []

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu()

   
  }

  pipe = ' - '

  cargarMenu() {
    this._menuService.getMenu().subscribe(data => {
      this.menu = data
    })
  }

}
