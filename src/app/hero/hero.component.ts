import { Component } from '@angular/core';
import { HeroTextComponent } from '../hero-text/hero-text.component';
import { HeroImagesComponent } from '../hero-images/hero-images.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroTextComponent, HeroImagesComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
