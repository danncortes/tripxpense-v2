import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { authConfig } from './auth.config';

import { RouterModule, Router} from '@angular/router';

declare var Auth0Lock: any;


@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock( authConfig.clientID, authConfig.domain, authConfig.options);

  //Store profile object in auth class
  userProfile: Object;

  constructor(private router:Router) {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {

      localStorage.setItem('id_token', authResult.idToken);
      console.log('logged')

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        this.router.navigate(['auth']);
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired('id_token');
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
    this.router.navigateByUrl('/welcome');
  }
}