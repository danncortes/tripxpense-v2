import { Component, OnInit } from '@angular/core';
import { Auth } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[
    Auth
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private auth: Auth) {}

  ngOnInit() {
    console.log(this.auth)
  }

}
