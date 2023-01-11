import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private  linktheme = document.querySelector('#theme');
  constructor()  {

    
      const url = localStorage.getItem('theme') || `./assets/main/css/colors/purple-dark.css`;
      
      this.linktheme!.setAttribute('href', url);
  
  }

  changeTheme(theme: string) {
  
    
    const url = `./assets/main/css/colors/${theme}.css`;
    console.log(url);
    this.linktheme!.setAttribute('href', url) ;
    localStorage.setItem('theme', url) ;
    this.checkCurrentTheme();
    
  }
  checkCurrentTheme(): void {
    const links = document.querySelectorAll('.selector');

    links.forEach(elem => {
      elem.classList.remove('working') ;
      const btnTheme = elem.getAttribute('data-theme') ;
      const btnThemeUrl=`./assets/main/css/colors/${btnTheme}.css`;
      const currentTheme = this.linktheme?.getAttribute('href'); 

      if ( btnThemeUrl === currentTheme ){
        elem.classList.add('working');
      }
    });

  }
}
