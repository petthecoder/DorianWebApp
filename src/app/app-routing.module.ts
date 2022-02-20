import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './functionalities/home/home/home.component';
import { ConfigComponent } from './functionalities/configuration/config/config.component';
import { ProjectsMainComponent } from './functionalities/projectManager/projects-main/projects-main.component';
import { ProjectDisplayComponent } from './functionalities/projectManager/project-display/project-display.component';
import { TaskOrganizerComponent } from './functionalities/projectManager/task-organizer/task-organizer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'projectManager',
    component: ProjectsMainComponent,
  },
  {
    path: 'projectManager/project/:id',
    component: ProjectDisplayComponent,
  },
  {
    path: 'projectManager/taskOrganizer/:id',
    component: ProjectDisplayComponent,
  },
  {
    path: 'config',
    component: ConfigComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
