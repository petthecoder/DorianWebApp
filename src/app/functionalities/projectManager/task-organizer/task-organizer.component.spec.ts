import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOrganizerComponent } from './task-organizer.component';

describe('TaskOrganizerComponent', () => {
  let component: TaskOrganizerComponent;
  let fixture: ComponentFixture<TaskOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskOrganizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
