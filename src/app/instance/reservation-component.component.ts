import {Component, OnInit} from '@angular/core';
import {InstanceService} from "./instance.service";

@Component({
  selector: 'app-reservation-component',
  templateUrl: './reservation-component.component.html',
  styleUrls: ['./reservation-component.component.css']
})
export class ReservationComponentComponent implements OnInit {

  data: any = []
  labels: any = []
  demand: any = []
  reserved: any = []
  barChartData: any = []


  constructor(private service: InstanceService) {

  }

  ngOnInit(): void {
    this.service.getInstances().subscribe(res => {
      this.data = res;
      this.data.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => (a["name"] > b["name"] ? 1 : -1));
      for (const [key, value] of Object.entries(res)) {
        this.labels.push(value["name"]);
        this.demand.push(value["demand"]);
        this.reserved.push(value["reserved"]);
      }
      this.barChartData = [
        {barThickness: 16, barPercentage: 0.5,data: this.demand, label: 'Demand', stack: 'a'},
        {barThickness: 16, barPercentage: 0.5,data: this.reserved, label: 'Reserved', stack: 'a'}]
    })
  }
}
