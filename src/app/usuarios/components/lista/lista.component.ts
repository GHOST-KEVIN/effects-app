import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { AppState } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from '../../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: ``
})
export class ListaComponent implements OnInit {

  usuarios:Usuario[] = []
  loading = false
  error:any = null

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(cargarUsuarios())
    this.store.select('usuarios').subscribe({
      next: ({users, error, loading}) => {
        this.usuarios = users
        this.error = error
        this.loading = loading
      }
    })
  }

}
