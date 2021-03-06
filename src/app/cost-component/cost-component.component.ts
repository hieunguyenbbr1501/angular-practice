import {Component, OnInit} from '@angular/core';
import {CostService} from "./cost.service";
@Component({
  selector: 'app-cost-component',
  templateUrl: './cost-component.component.html',
  styleUrls: ['./cost-component.component.css'],
  providers: [CostService]
})
export class CostComponentComponent implements OnInit {
  costs: any = []
  rotate: boolean = false
  constructor(private service: CostService) {
  }

  ngOnInit(): void {
    this.service.getCosts().subscribe(val => {
      console.log(val);
      this.costs = val;
    })
  }

}
