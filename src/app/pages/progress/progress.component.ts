import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent{
  progreso1: number = 50;
  progreso2: number = 35;

  get progress1(){
    return `${this.progreso1}%`;
  }

  get progress2() {
    return `${this.progreso2}%`;
  }

  cambiovalorhijo(llegovalordebarra : number){
    this.progreso1 = llegovalordebarra;
    console.log(this.progreso1);
    
  }

}