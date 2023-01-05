import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {
casa: string = 'ventas';
  
  public doughnutChartLabels: string[] = [ 'Download ', 'In-Store ', 'Mail-Order ' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 550, 450, 500 ] ,backgroundColor:["#9E120E","#FF5800","#FFB414"]}
      
    ],
    
  };
} 