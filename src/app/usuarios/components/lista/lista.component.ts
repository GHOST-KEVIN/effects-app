import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: ``
})
export class ListaComponent implements OnInit {

  usuarios:Usuario[] = []

  constructor(private usuarioService:UsuarioService){}

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (usuarios) => this.usuarios = usuarios
    })
  }

}
