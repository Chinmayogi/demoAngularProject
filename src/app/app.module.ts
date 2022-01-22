import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApproutingModue } from '../app/app.routing-module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {FixedcomponentcontentModule} from '../app/modules/allmodules/fixedcomponent/fixedcomponent.module';
import { RouterModule } from '@angular/router';
import { FixedcontentComponent } from '../app/modules/allmodules/fixedcontent/fixedcontent/fixedcontent.component';
import { SidebarComponent } from '../app/modules/allmodules/fixedcomponent/sidebar/sidebar.component';
import { NavbarComponent } from '../app/modules/allmodules/fixedcomponent/navbar/navbar.component';
import { LoginComponent } from '../app/modules/login/login.component';
import { AngularMaterialModule } from '../app/shared/angular-material-module/angular-material-module.module';
const APP_CONTAINER = [FixedcontentComponent];
@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINER,
    NavbarComponent,
    SidebarComponent,
    LoginComponent



  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule, ApproutingModue, HttpClientModule, BrowserAnimationsModule, FlexLayoutModule, RouterModule, AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
