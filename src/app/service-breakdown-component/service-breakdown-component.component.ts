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

  ngOnInit(): void {
    this.service.getServices().subscribe(val => {
      this.data = val;
    })
  }

}
