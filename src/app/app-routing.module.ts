import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


const routes : Routes = [
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: '**', component: NopagesfoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
