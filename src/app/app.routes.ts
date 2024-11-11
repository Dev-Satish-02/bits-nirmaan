import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { WomenEmpowermentComponent } from './women-empowerment/women-empowerment.component';
import { EducationComponent } from './education/education.component';
import { CommunityDevelopmentComponent } from './community-development/community-development.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    {
        path: 'team',
        component: TeamComponent
    },
    { 
        path: 'education', 
        component: EducationComponent 
    },
    { 
        path: 'community-development', 
        component: CommunityDevelopmentComponent 
    },
    { 
        path: 'women-empowerment', 
        component: WomenEmpowermentComponent 
    },
];
