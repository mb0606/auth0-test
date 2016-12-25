
import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'my-navbar',
  template: `
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">LOGO</a>
        </div>
        <ul class="nav navbar-nav">
          <li><a routerLink="/">Home</a></li>
        </ul>
         <ul class="nav navbar-nav navbar-right">
          <li *ngIf="auth.authenticated()"><a routerLink="/profile">Profile</a></li>
          <li *ngIf="!auth.authenticated()"><a (click)="auth.login()">Login</a></li>
          <li *ngIf="auth.authenticated()"><a (click)="auth.logout()">Logout</a></li>
        </ul>
      </div>
    </nav>
   `
})

export class NavbarComponent {

  constructor(private auth:AuthService){}

}
