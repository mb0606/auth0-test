import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { KEY, DOMAINE } from "../key.config";
import { options } from "../auth.options";
import {Router} from "@angular/router";

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  redirectLocation: string = null;

  lock = new Auth0Lock( KEY, DOMAINE, options);

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult: any) => {
      this.lock.getProfile(authResult.idToken, function(error: any, profile: any){
        if(error){
            throw new Error(error)
        }
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
      })

    });

  }

  public authenticated(){
    return tokenNotExpired();
  }

  public login() {
    this.lock.show();

  }

  public redirect(){
    if(this.redirectLocation){
      this.router.navigate([this.redirectLocation])
    }
  }

  public logout() {
    // Remove info from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.router.navigate(['/']);
  }
}
