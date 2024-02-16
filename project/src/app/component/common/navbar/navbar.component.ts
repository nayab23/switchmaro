import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isClassAdded: boolean = false;
  isMobileClassAdded: boolean = false;
  handleMobileMenu() {
    this.isMobileClassAdded = !this.isMobileClassAdded;
  }
}
