import { Component } from '@angular/core';
import { PROJECTS } from '@shared/data/projects.mock';
import { Project } from 'src/app/models/project.interface';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  template: `
    <section id="projects">
      <h2 class="text-4xl font-semibold">Projects</h2>
      <ul class="mt-10 flex flex-col gap-3">
        @for (project of projects; track project.id) {
          <li>
            <app-project [project]="project" />
          </li>
        }
      </ul>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
