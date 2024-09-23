import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api'

  constructor(private http:HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.url}/users`).pipe(map((resp:any) => resp['data'] as Usuario[] ))
  }
}
