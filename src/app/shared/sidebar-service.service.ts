import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarServiceService {

  private menuIsOpen$: Subject<boolean>;
    private menuIsOpen: boolean = false;
    constructor() {
        this.menuIsOpen$ = new Subject<boolean>();
    }

    /**
    * Si esta abierto, lo cierra
    **/
    public open() {
            if(!this.menuIsOpen) {
                this.menuIsOpen = true;
                this.menuIsOpen$.next(false);
            }
    }
    public silenceOpen() {
        this.menuIsOpen = true;
    }
    public silenceClose() {
        this.menuIsOpen = false;
    }

    /**
    * Si está cerrado, lo abre
    **/
    public close() {
            if(this.menuIsOpen) {
                this.menuIsOpen = false;
                this.menuIsOpen$.next(false);
            }
    }

    public toggle() {
        this.menuIsOpen = !this.menuIsOpen;
        this.menuIsOpen$.next(this.menuIsOpen);
    }

    public asObservable() 
    {
        return this.menuIsOpen$.asObservable();
    }
}
