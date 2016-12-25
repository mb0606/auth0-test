import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'my-home',
  template: `
    
    <h1>This is the home component</h1>
    <h5 *ngIf="auth.authenticated()"> You are logged in </h5>
    <h5 *ngIf="!auth.authenticated()"> You are not logged in please login to see more </h5>
  
`,
})
export class HomeComponent  {

  constructor(private auth: AuthService){

  }
}
