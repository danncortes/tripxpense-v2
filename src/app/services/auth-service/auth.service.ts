import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { authConfig } from './auth.config';

declare var Auth0Lock: any;


@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock( authConfig.clientID, authConfig.domain, authConfig.options);

  //Store profile object in auth class
  userProfile: Object;

  constructor() {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        // Handle error
        alert(error);
        return;
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      this.userProfile = profile;

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
  }
}


// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

// @Injectable()
// export class AuthService {
//   user = { isAdmin: true };
//   checkPermissions() {
//     return Observable.of(this.user.isAdmin);
//   }
//   isLoggedIn() {
//     return Observable.of(true);
//   }
// }