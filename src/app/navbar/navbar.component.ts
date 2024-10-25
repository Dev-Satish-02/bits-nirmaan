import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false; // Track the menu's open/close state

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle menu visibility
  }
}
