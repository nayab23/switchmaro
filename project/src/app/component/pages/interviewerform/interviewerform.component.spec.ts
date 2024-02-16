import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerformComponent } from './interviewerform.component';

describe('InterviewerformComponent', () => {
  let component: InterviewerformComponent;
  let fixture: ComponentFixture<InterviewerformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewerformComponent]
    });
    fixture = TestBed.createComponent(InterviewerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
