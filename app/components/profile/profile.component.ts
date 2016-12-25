import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'my-profile',
  template: `
    
    <h3>User Profile</h3>
    <h5>Nickname: {{profile.nickname}}</h5>
    <div class="row">
      <div class="col-md-4">
        <img class="img-responsive" src="{{profile.picture}}" alt="">
      </div>
      <div class="col-md-8">
        <ul class="list-group">
         <li class="list-group-item">Email: {{profile.name}}</li>
         <li class="list-group-item">Profile Updated At: {{profile.updated_at | date}}</li>
        </ul>
      </div>

    </div>
  
`,
})
export class ProfileComponent  {
  profile:any;

  constructor(private auth: AuthService){
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile)
  }
}
