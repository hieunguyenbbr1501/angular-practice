import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CostService {
  private SERVER_URL = 'http://localhost:3001';
  public data: any = []
  constructor(private http:HttpClient) {
  }
  getCosts(){
    let token : string = localStorage.getItem('currentUser') || ''
      return this.http.get(this.SERVER_URL + '/cost', {
        headers: {'authorization' : token}
      })

  }
}
