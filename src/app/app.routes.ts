import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HeroComponent 
    },
    {
        path: 'projects',
        component: ProjectsComponent
    }
];
