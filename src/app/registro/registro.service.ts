import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  registro(login: string, password: string, email : string, fechaNac : Date) {
    //Saber si username introducido en input es login o email, para luego construir el json correctamente o email: o login:
    return this.http.post('http://localhost:8080/usuario/registro', {
      login: login,
      password: password,
      email: email,
      fechaNac: fechaNac
    });
  }
}
