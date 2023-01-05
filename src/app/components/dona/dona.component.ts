
import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {


  @Input('title')
  titlestable!: string;
@Input('doughnutChartLabels') doughnutChartData: ChartData<'doughnut'> = {
  labels:[ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
  datasets: [
    { data: [ 350, 450, 100 ] ,backgroundColor:["#9E120E","#FF5800","#FFB414"]}
    
  ],
  
};

   
  // Doughnut
  
  public doughnutChartType: ChartType = 'doughnut';
  
  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
