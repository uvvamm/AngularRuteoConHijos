import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
declare function customInitFunctions(): void;



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  public linktheme = document.querySelector('#theme');
  
  constructor(private settingsService: SettingsService) { }
  
  ngOnInit(): void {
   
    
    customInitFunctions();
  }
  
    
    
    
  
}
