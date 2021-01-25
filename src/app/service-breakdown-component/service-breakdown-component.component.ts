import {Component, OnInit} from '@angular/core';
import {ServiceService} from "./service.service";

@Component({
  selector: 'app-service-breakdown-component',
  templateUrl: './service-breakdown-component.component.html',
  styleUrls: ['./service-breakdown-component.component.css']
})
export class ServiceBreakdownComponentComponent implements OnInit {
  constructor(private service: ServiceService) {
  }

  data: any

  labels: any = []

  prices: any = []

  colors: any[] = [{
    backgroundColor:[]
  }];

  ngOnInit(): void {
    this.service.getServices().subscribe(val => {
      this.data = val;
      for (const [key, value] of Object.entries(val)) {
        this.labels.push(value["name"]);
        this.prices.push(value["price"]);
        this.colors[0].backgroundColor.push(value["color"]);
      }
    })
  }

}
