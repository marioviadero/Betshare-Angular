import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarServiceService } from '../shared/sidebar-service.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;


  @ViewChild('sidenav') sidenav: MatSidenav;
    constructor(private sidebarService: SidebarServiceService) 
    {

    }

    ngOnInit() {
        /**
        When you reveive order to open / close sidenav.
        **/
        this.sidebarService.asObservable().subscribe((isOpen: boolean) => {
                    if(isOpen) {
                        this.sidenav.close();
                    }
                    else{
                        this.sidenav.open();
                    }
            });
    }

    onOpenedChange() {
        this.sidebarService.silenceOpen();
    }
    onClosedChange() {
        this.sidebarService.silenceClose();
    }

  
}
