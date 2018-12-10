import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../shared/usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios$: Object;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.listaUsuarios().subscribe(
      usuariosService => this.usuarios$ = usuariosService
    );
  }

}
