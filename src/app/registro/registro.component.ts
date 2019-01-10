import { Component, OnInit } from '@angular/core';
import {RegistroService} from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  router: any;
  constructor(private registroService: RegistroService) { }

  ngOnInit() {
  }

  
    signIn(login: string, password: string, repetirpassword: string, email : string, fechaNac : Date, event: Event) {
      event.preventDefault(); // Avoid default action for the submit button of the login form
  
      if(repetirpassword=password){
      // Calls service to login user to the api rest
      this.registroService.registro(login, password,email,fechaNac).subscribe(
        
        res => {
        console.log(res);

        },
        error => {
          console.error(error);
        },

      );
      }
      
  
  }
  
}
