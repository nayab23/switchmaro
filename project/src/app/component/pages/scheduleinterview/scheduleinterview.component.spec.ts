import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleinterviewComponent } from './scheduleinterview.component';

describe('ScheduleinterviewComponent', () => {
  let component: ScheduleinterviewComponent;
  let fixture: ComponentFixture<ScheduleinterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleinterviewComponent]
    });
    fixture = TestBed.createComponent(ScheduleinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
