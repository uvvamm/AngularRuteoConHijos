import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterFormUsuario } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-interface';
import { tap, map, Observable, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

declare const google: any;
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,
      private router: Router) { 

  }

  gogleInitservice(){
    google.accounts.id.initialize({
      client_id: "908924646334-skn605q85t7qps0v4qb31e6541tq2jqh.apps.googleusercontent.com",
      
    });
   }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login'); 

    google.accounts.id.revoke('correo',() => {
      this.router.navigateByUrl('/login');
    })
  }

  validarToken():Observable<boolean>{
    const token = localStorage.getItem('token') || '';
     return this.http.get(`${base_url}/login/renew`,{
      headers:{
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) =>{
        localStorage.setItem('token', resp.token)
      }),
       map( resp =>true),
       catchError(error => of(false))

    );
  }

  crearUsuario(formData: RegisterFormUsuario){
    
      return this.http.post(`${base_url}/usuarios`,formData).
      pipe(
        tap( (resp: any) =>{
          localStorage.setItem('token', resp.token)
        })

      )


  }
  login(formData: LoginForm){
    
      return this.http.post(`${base_url}/login`,formData).
      pipe(
        tap( (resp: any) =>{
          localStorage.setItem('token', resp.token)
        })

      )
  }

  loginGoogle(token: string){
    return this.http.post(`${base_url}/login/google`,{token})
    .pipe(
      tap((resp: any) =>{
        localStorage.setItem('token', resp.token)
      })
    )

  }

}
