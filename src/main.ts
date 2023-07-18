import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { WorkFormComponent } from './work-form/work-form.component';

const routes: Routes = [
  { path: 'personal', component: PersonalFormComponent },
  { path: 'work', component: WorkFormComponent },
];

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
