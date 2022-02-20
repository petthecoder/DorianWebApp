import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOrganizerComponent } from './functionalities/projectManager/task-organizer/task-organizer.component';
import { ConfigComponent } from './functionalities/configuration/config/config.component';
import { ProjectsMainComponent } from './functionalities/projectManager/projects-main/projects-main.component';
import { ProjectDisplayComponent } from './functionalities/projectManager/project-display/project-display.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './functionalities/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskOrganizerComponent,
    ConfigComponent,
    ProjectsMainComponent,
    ProjectDisplayComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
