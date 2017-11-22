import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn : Observable<boolean>;

  constructor( public authService : AuthService ) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
