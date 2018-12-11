import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { UsuariosService } from '../shared/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user$: Object;
  
  constructor(private route: ActivatedRoute, private service: UsuariosService) { 
     this.route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
    this.service.getUsuario(this.user$).subscribe(
      service => this.user$ = service 
    );
  }
}
