import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from '../login/login.routing';
import {SharedModule} from '../../shared/shared/shared.module';
import {AngularMaterialModule} from '../../shared/angular-material-module/angular-material-module.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class LoginModule { }
