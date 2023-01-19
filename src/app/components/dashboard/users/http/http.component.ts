import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user.interface';
import { DataService } from './data.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  users: UserInterface[] | undefined;
  

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.dataSvc.getUsers().subscribe((data) => (this.users = data));
  }

}


