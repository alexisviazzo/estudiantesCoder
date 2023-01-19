import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Product{
  nombre: string;
  apellido: string;
  sexo: string;
  usuario: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioEstudiantesService {

  private readonly baseUrl = 'https://63c56994f3a73b3478559ee2.mockapi.io/api/avi';
  private products = new BehaviorSubject<Product[]>([]) 
  public products$: Observable<Product[]>;

  constructor(private httpClient: HttpClient) {
    this.products$ = this.products.asObservable();
  }

  loadProducts() {
    this.httpClient.get<Product[]>(`${this.baseUrl}/products`).subscribe((apiProducts)=>{
      this.products.next(apiProducts)
    })
  }
}
