import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {

    
 /*    const promesa = new Promise( (resolve,reject)=> {
      if (true){
      resolve('asad');
      }else{
        reject('algo salio mal'); 
      }

    });
    promesa.then((mensaje)=> {
      console.log(mensaje,'hey termine');
    })
    .catch(error => console.log('error en proimesa',error)); 


    console.log('promesas');
 */
  this. getUsuarios().then((usuarios)=>{
    console.log(usuarios);
  })

  }
    getUsuarios(){
      const promesa = new Promise( resolve => {
    fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve (body.data));

        
        
      });
      return promesa;
  }


}
