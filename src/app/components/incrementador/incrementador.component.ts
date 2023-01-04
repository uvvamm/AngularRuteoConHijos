import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso : number = 90;
  @Input() btnClass: string = 'btn-primary';


  @Output() onChangeprogress : EventEmitter<number> = new EventEmitter();
  
    ngOnInit(): void {
      this.btnClass = `btn ${this.btnClass}`;
    }

  constructor() { }

 

  cambiarValor (valor: number){
    console.log(this.progreso);
    if( this.progreso >=100 && valor >=0){
      this.onChangeprogress.emit(100);
      return this.progreso = 100;
    }
    
    else if( this.progreso <=0 && valor < 0 ){
      this.onChangeprogress.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    console.log(this.progreso);
    return this.onChangeprogress.emit( this.progreso );
  }

  onChange(Nuevovalor: number){
    if(Nuevovalor >=100){
      this.progreso=100;

    }else if(Nuevovalor <=0 ){
      this.progreso=0;

    }else{
      this.progreso = Nuevovalor;
    }
    
    this.onChangeprogress.emit(this.progreso);

     
  }
}
