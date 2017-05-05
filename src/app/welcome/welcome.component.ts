import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../services/auth-service/auth.service';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
    //this.redirect()
  }

  redirect(){
    /*if(this.auth.authenticated){
      this.router.navigate(['auth'])
    }*/
  }

}
