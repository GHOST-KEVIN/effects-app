import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { cargarUsuario } from '../../../store/actions';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: ``
})
export class UsuarioComponent implements OnInit {

  usuario:Usuario|null = null
  loading = false
  error:any = null

  constructor(private router:ActivatedRoute, private store:Store<AppState>){}

  ngOnInit(): void {
    this.router.params.subscribe({
      next: ({id}) => this.store.dispatch(cargarUsuario({id}))
    })

    this.store.select('usuario').subscribe({
      next: ({user, loading, error}) => {
        this.usuario = user
        this.loading = loading
        this.error = error
      }
    })
  }
}
