import { Component, OnInit } from '@angular/core';
import {CostService} from "./cost.service";

@Component({
  selector: 'app-cost-component',
  templateUrl: './cost-component.component.html',
  styleUrls: ['./cost-component.component.css'],
  providers: [CostService]
})
export class CostComponentComponent implements OnInit {
  costs:any = []
  constructor(private service: CostService) { }
  ngOnInit(): void {
    this.service.getCosts().subscribe(val => {this.costs = val; console.log(this.costs)})
  }

}
