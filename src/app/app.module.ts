import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOrganizerComponent } from './functionalities/projectManager/task-organizer/task-organizer.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskOrganizerComponent
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
