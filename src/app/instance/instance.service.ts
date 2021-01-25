import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InstanceService {

  private SERVER_URL = environment.apiUrl;
  public data: any = []
  constructor(private http:HttpClient) {
  }
  getInstances() {
    return this.http.get(this.SERVER_URL + "/instance")
  }
}
