import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(login: string, password: string) {
    //Saber si username introducido en input es login o email, para luego construir el json correctamente o email: o login:
    return this.http.post('http://localhost:8080/usuario/login', {
      login: login,
      password: password,
    });
  }
}
