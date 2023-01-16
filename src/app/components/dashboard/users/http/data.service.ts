import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/models/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = 'https://63c56994f3a73b3478559ee2.mockapi.io/api/avi/'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.urlAPI + 'users');
  }
}
