import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cost} from "./cost";

@Injectable({
  providedIn: 'root'
})
export class CostService {
  private SERVER_URL = environment.apiUrl;
  public data: any = []
  constructor(private http:HttpClient) {
  }
  getCosts(){
    return this.http.get(this.SERVER_URL + '/cost')
  }
}
