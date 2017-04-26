import { Component } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[
    AuthService
  ]
})
export class AppComponent {

  constructor(private auth: AuthService){

  }

  title = 'app works!';
}
