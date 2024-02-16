import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WanttoswitchComponent } from './wanttoswitch.component';

describe('WanttoswitchComponent', () => {
  let component: WanttoswitchComponent;
  let fixture: ComponentFixture<WanttoswitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WanttoswitchComponent]
    });
    fixture = TestBed.createComponent(WanttoswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
