import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListMyComponent } from './task-list-my.component';

describe('TaskListMyComponent', () => {
  let component: TaskListMyComponent;
  let fixture: ComponentFixture<TaskListMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListMyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
