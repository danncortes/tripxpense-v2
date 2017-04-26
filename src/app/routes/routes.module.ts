import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

//Components

//Dashboard
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';


const appRoutes: Routes = [
  //Login
  { path: 'login', component:LoginComponent},
  //Dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'register', component:RegisterComponent}
]

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class RoutesModule { }
