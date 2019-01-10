import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }
  logIn(login: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(login, password).subscribe(

      res => {
       console.log(res);

      },
      error => {
        console.error(error);
      },

    );
    () => this.navigate()
  }
  navigate() {
    this.router.navigate('registro');
  }

}
