import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock('suJX9g79AJqFi5B3Ocw5G2vCGGwvcw1b', 'mb0606.auth0.com', {});

  constructor() {
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
    // Call the show method to display the widget.
    this.lock.show();
  }

  public logout() {
    // Remove info from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
