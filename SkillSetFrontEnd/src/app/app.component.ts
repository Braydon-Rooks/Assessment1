import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TheFormComponent } from './the-form/the-form.component';
import { ResultsComponent } from './results/results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TheFormComponent,ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SkillSetFrontEnd';
}
