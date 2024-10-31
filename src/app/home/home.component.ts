import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { EventsComponent } from '../events/events.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent, EventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
