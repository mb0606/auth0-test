import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'my-home',
  template: `
    
    <h1>This is the home component</h1>
  
`,
})
export class HomeComponent  {

  constructor(private auth: AuthService){

  }
}
