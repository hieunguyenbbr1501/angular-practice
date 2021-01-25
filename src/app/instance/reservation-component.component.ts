import { Component, OnInit } from '@angular/core';
import {InstanceService} from "./instance.service";

@Component({
  selector: 'app-reservation-component',
  templateUrl: './reservation-component.component.html',
  styleUrls: ['./reservation-component.component.css']
})
export class ReservationComponentComponent implements OnInit {

  data : any = {}
  constructor(private service: InstanceService) {

  }

  ngOnInit(): void {
    this.service.getInstances().subscribe(res => {this.data = res} );
  }

}
