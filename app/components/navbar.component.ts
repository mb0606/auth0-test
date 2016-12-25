
import { Component } from '@angular/core';


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
          <li><a routerLink="/profile">Profile</a></li>
        </ul>
      </div>
    </nav>
   `
})

export class NavbarComponent {



}
