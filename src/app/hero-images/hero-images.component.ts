import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-images',
  template: `
    <div style="text-align: center; position: relative;">
      <button (click)="nextImage()" style="background: none; border: none; padding: 0; cursor: pointer;">
        <img [src]="images[currentImageIndex]" alt="Slider Image" style="max-width: 100%; height: auto;">
      </button>
    </div>
  `,
  styleUrls: ['./hero-images.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class HeroImagesComponent {
  images: string[] = [
    'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/hero1.jpeg',
    'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/hero2.jpeg',
    'https://raw.githubusercontent.com/Dev-Satish-01/images/refs/heads/main/bits-nirmaan/hero3.jpeg'
  ];

  currentImageIndex: number = 0;

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length; // Change to the next image
  }
}
