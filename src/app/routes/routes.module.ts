import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';


//Components
import { WelcomeComponent } from '../welcome/welcome.component';
import { MainComponent } from '../main/main.component';

//Dashboard
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';

import { AuthGuard } from '../auth.guard';

const appRoutes: Routes = [
  //Dashboard
  { path: 'welcome', component:WelcomeComponent},
  { path: '', component:MainComponent, canActivate: [ AuthGuard ], children:[
    { path: 'dashboard', component:DashboardComponent},
    { path: 'register', component:RegisterComponent}
  ]},
  { path: '**', redirectTo: '/welcome', pathMatch:'full'}
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[
    AuthGuard
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class RoutesModule{ }
