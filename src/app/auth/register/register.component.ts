import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   {

  public formSubmitted = false;

  public registerForm = this.fb.group({

    
      nombre : ['fernando',Validators.required],
      email: ['uvam@asdfsa',[Validators.required, Validators.email]],
      password :['Asko1212', Validators.required],
      password2 :['Asko1212', Validators.required],
      terminos : [true,Validators.required],

  },{
    validators: this.passwordsIguales('password','password2')
  });
  constructor( private fb : FormBuilder,
        private usuarioService : UsuarioService
    ) { }

  crearUsuario(){
    
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      console.log('enviado');

      this.usuarioService.crearUsuario(this.registerForm.value)
      .subscribe(resp => {
        console.log('usuario creado');
        console.log(resp);
      },(err) =>{

        Swal.fire('Error',err.error.errors.email.msg,'error')
      }
      );
      
    }else{
      console.log(' no enviado');
 
    }

  }
  
  campoNovalido(campo: string):boolean{
   
    if(this.registerForm.get(campo)?.invalid && this.formSubmitted){
    return true;
  } else {

    return false;
  }
  }

  passwordsIguales(pass1:string, pass2:string){
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      
      
      if (pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null);
        
      }else {
        pass2Control?.setErrors({noEsIguales: true});
      }
      
    }
  }


  aceptarTerminos(){
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }


}
