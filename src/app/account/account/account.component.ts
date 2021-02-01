import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  form: any = {
    name: '',
    department: '',
    phone: '',
    code: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    return false;
  }
}
