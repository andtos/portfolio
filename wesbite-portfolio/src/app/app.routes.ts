import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
      path: 'experiences',
      component: ExperiencesComponent,
    },
    {
      path: '',
      component: HomeComponent,
    },
  ];

