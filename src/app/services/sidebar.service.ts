import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any [] = [
    {
      titulo:'Dashboard',
      icono : 'mdi mdi-gauge',
      submenu : [
        
        { titulo : 'Progressbar', url: 'progress' },
        { titulo : 'Dona', url: 'grafica1' },
        { titulo : 'Ajustes', url: 'accountsettings' },
        { titulo : 'Promesas', url: 'promesas' },
        { titulo : 'Rxjs', url: 'rxjs' },
        
      ]
    }
  ];


  constructor() { }
}
