import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'my-profile',
  template: `
    
    <h3>User Profile</h3>
  
`,
})
export class ProfileComponent  {

  constructor(private auth: AuthService){

  }
}
