import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map, filter, switchMap } from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const SERVER_URL = environment.authUrl


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token : string = '';


  constructor(private http: HttpClient) {
    var currentUser = localStorage.getItem('currentUser') != 'undefined' ? JSON.parse(<string>localStorage.getItem('currentUser')) : null;
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string) : Observable<any> {
    return this.http.post(SERVER_URL + '/users/login', {
      username, password}, {responseType: 'text'})}
}
