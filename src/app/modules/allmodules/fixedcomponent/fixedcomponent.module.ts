import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from '../fixedcomponent/sidebar/sidebar.component';
import { NavbarComponent } from '../fixedcomponent/navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent, SidebarComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [NavbarComponent, SidebarComponent]
})
export class FixedcomponentcontentModule { }
