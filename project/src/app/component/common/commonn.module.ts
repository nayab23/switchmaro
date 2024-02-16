import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CommonnModule { }
