import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import {AuthGuard} from '../guards/auth.guard';




const routes: Routes = [
 
  {
    path: '',
    component: LoginComponent,
   // canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
