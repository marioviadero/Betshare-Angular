import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor(private http: HttpClient) { }

  listaUsuarios() {
    return this.http.get('http://localhost:8080/usuario/lista-usuarios');
  }
  getUsuario(userId){
    return this.http.get('http://localhost:8080/usuario/'+userId)
  }
}
