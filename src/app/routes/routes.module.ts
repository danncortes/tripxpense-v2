import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

//Components

//Dashboard
import { DashboardComponent } from '../dashboard/dashboard.component';


const appRoutes: Routes = [
  //Dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component:DashboardComponent}
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
