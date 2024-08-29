import { Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {
      path: 'experiences',
      component: ExperiencesComponent,
    },
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'projects',
      component: ProjectsComponent
    },
  ];

