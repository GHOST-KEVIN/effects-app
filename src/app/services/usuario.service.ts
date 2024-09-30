import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api'

  constructor(private http:HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.url}/users?delay=3`).pipe(map((resp:any) => resp['data'] ))
  }

  obtenerUsuario(id:string) {
    return this.http.get(`${this.url}/users/${id}?delay=3`).pipe(map((resp:any) => resp['data'] ))
  }
}
