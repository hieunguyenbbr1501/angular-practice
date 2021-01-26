import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color} from "ng2-charts";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  @Input()
  public barChartData: ChartDataSets[] = [
    { data: [1, 2, 3], label: 'Approved', stack: 'a' },
    { data: [1, 2, 3], label: 'Accepted', stack: 'a' },
    { data: [1, 2, 3], label: 'Open', stack: 'a' },
    { data: [1, 2, 3], label: 'In Progress', stack: 'a' },
  ];
  @Input()
  public barChartLabels: string[] = ['P', 'R', 'B'];
  constructor() { }

  public barChartColors: Color[] = [
    { backgroundColor: 'red' },
    { backgroundColor: 'green' },
  ]


  ngOnInit(): void {
  }

}
