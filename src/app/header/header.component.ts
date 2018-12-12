import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarServiceService } from '../shared/sidebar-service.service';

@Component({
  providers:[SidebarComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebar: SidebarServiceService) { }

  ngOnInit() {
  }

  abrirMenuLateral(){ 
    this.sidebar.toggle();
    }

}
