import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "./service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private SERVER_URL = environment.apiUrl;
  constructor(private http:HttpClient) {
  }
  getServices() {
    let token : string = localStorage.getItem('currentUser') || ''
    return this.http.get(this.SERVER_URL + "/services", {
      headers: {'authorization' : token}
    });
  }
}
