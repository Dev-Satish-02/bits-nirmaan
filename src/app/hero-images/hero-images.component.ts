import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-images',
  templateUrl: './hero-images.component.html',
  styleUrls: ['./hero-images.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class HeroImagesComponent {
  images: string[] = [
    'images/hero/1.jpeg',
    'images/hero/2.jpeg',
    'images/hero/3.jpeg'
  ];

  currentImageIndex: number = 0;

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}
