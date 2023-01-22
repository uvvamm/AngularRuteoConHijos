import { Component } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {

  public titulo : string ='';
  activatedRoute: any;
  constructor( private router :Router) {
    
   }


}

