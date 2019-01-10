import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {UsuarioComponent} from './usuario/usuario.component';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'usuario/:id',
    component: UsuarioComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
