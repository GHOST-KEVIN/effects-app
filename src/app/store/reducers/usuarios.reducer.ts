import { createReducer, on } from '@ngrx/store';
import {
  cargarUsuarios,
  cargarUsuariosSuccess,
  cargarUsuariosError,
} from '../actions';
import { Usuario } from '../../models/usuario';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

export const usuariosReducer = createReducer(
  initialState,

  on(cargarUsuarios, (state) => ({ ...state, loading: true })),

  on(cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios],
  })),

  on(cargarUsuariosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);
