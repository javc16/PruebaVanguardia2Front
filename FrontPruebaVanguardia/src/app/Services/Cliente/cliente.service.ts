import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url:string;

  constructor(private http: HttpClient) 

  {

    this.url =  "https://localhost:44373/api/Cliente";

  }

  getData(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  create(cliente: Cliente) {
    return this.http.post(this.url, cliente);
  }
}
