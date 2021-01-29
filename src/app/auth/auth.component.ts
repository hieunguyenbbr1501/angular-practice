import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {TokenStorageService} from "./token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }
  onSubmit():void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data["accessToken"]);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        localStorage.setItem("currentUser", data["accessToken"])
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  ngOnInit(): void {
    if (this.tokenStorage.getToken() && localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    }
    if (this.isLoggedIn) {
      this.router.navigate(['/dashboard'])
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

}
