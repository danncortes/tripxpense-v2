import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[
    AuthService
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

}
