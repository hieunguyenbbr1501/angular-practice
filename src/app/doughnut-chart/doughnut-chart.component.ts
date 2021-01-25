import {Component, Input} from '@angular/core';
import { ChartType } from 'chart.js';
import {MultiDataSet, Label, Color} from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})

export class DoughnutChartComponent {

  @Input()
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  @Input()
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  @Input()
  doughnutChartColor: any[] = [{
      backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2"]
    }];
  doughnutChartType: ChartType = 'doughnut';

}
