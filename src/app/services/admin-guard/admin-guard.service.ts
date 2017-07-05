import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class AdminGuardService {

  profile: any;
  
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    return this.auth.isAdmin()
  }

}
