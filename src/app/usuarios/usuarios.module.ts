import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ListaComponent } from './components/lista/lista.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
