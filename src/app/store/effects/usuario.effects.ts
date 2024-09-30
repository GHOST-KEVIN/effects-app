import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

  constructor(private actions$:Actions, private usuarioService:UsuarioService){}

  cargarUsuarios = createEffect(
    () => this.actions$.pipe(
      ofType(cargarUsuario),
      mergeMap(
        ({id}) => this.usuarioService.obtenerUsuario(id).pipe(
          map(usuario => cargarUsuarioSuccess({usuario})),
          catchError(error => of( cargarUsuarioError({payload:error}) ))
        )
      )
    )
  )
}