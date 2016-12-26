import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService } from './services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private auth: AuthService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let url: string = state.url;
    console.log(next, "and state", state)
    if(this.auth.authenticated()){
      console.log('AUTH PASS ');
      return true
    } else {
      console.log('BLOCKED BY AUTH')
      this.auth.redirectLocation = url;
      this.router.navigate(['/']);
      return false;
    }
  }

}


//The ActivatedRouteSnapshot contains the future route that will be activated
// and the RouterStateSnapshot contains the future RouterState of the application, should you pass through the guard check
// If the user is not logged in, you store the attempted URL the user came from using the RouterStateSnapshot.url
