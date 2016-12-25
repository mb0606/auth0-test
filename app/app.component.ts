import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service";


@Component({
  selector: 'my-app',
  template: `
    
  <my-navbar></my-navbar>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  
`,
})
export class AppComponent  {

  constructor(private auth: AuthService){

  }



}
