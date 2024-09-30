import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

  constructor(private actions$:Actions, private usuarioService:UsuarioService){}

  cargarUsuarios = createEffect(
    () => this.actions$.pipe(
      ofType(cargarUsuarios),
      mergeMap(
        () => this.usuarioService.obtenerUsuarios().pipe(
          map(usuarios => cargarUsuariosSuccess({usuarios})),
          catchError(error => of( cargarUsuariosError({payload:error}) ))
        )
      )
    )
  )
}