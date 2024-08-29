import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ExperiencesComponent } from '../experiences/experiences.component';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatChipsModule, RouterModule, ExperiencesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
