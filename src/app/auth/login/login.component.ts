import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('googleBtn')
  googleBtn!: ElementRef;
  
  public formSubmitted = false;
  public loginForm!: FormGroup;

  constructor( private router: Router,
     private fb : FormBuilder,
      private usuarioService: UsuarioService
    ) {
      
     }

     ngOnInit(): void {
      this.buildForm();
     }  
     ngAfterViewInit(): void {
      this.gogleInit();
     }  
     gogleInit(){
      google.accounts.id.initialize({
        client_id: "908924646334-skn605q85t7qps0v4qb31e6541tq2jqh.apps.googleusercontent.com",
        callback: (response:any) => this.handleCredentialResponse(response)
      });
      google.accounts.id.renderButton(
        this.googleBtn.nativeElement,
        { theme: "outline", size: "large" }  // customization attributes
      );
     }

    handleCredentialResponse(response : any) {
      console.log("jwt"+response.credential);
      this.usuarioService.loginGoogle( response.credential)
      .subscribe(resp =>{
        console.log({ login: resp })
        this.router.navigateByUrl('/'); 
      })
     }


     private buildForm(){
      this.loginForm = this.fb.group({
        email: [localStorage.getItem('email') || '',[Validators.required, Validators.email]],
        password :['', Validators.required],
        remember : [false],
    });
     }

  login(){

    
    
    
    this.formSubmitted = true;
    console.log(this.loginForm.value);

    
    if(this.loginForm.valid){
      console.log('enviado',this.loginForm.value);

      this.usuarioService.login(this.loginForm.value)
    .subscribe(resp => {
      console.log('usuario ingreso');
      if(this.loginForm.get('remember')!.value){
        localStorage.setItem('email',this.loginForm.get('email')!.value)
      }else{
        localStorage.removeItem('email');
      }
      this.router.navigateByUrl('/'); 
    },(err) =>{

      Swal.fire('Error',err.error.msg,'error')
    }
    );
  }
    //this.router.navigateByUrl('/'); 
  }

  
  campoNovalido(campo: string):boolean{


    
   
    if(this.loginForm.get(campo)?.invalid && this.formSubmitted){
    return true;
  } else {

    return false;
  }
  }


}