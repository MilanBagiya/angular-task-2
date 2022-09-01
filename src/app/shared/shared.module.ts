import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule
  ],

  declarations: [
    NavbarComponent,
    SidebarComponent,
    CardComponent
  ],

  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    NavbarComponent,
    CardComponent,
    MatSidenavModule,
    SidebarComponent
  ],
})
export class SharedModule { }