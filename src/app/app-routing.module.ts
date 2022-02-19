import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOrganizerComponent } from './functionalities/projectManager/task-organizer/task-organizer.component';

const routes: Routes = [
  {
    path: '',
    component: TaskOrganizerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
