import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartjourneyComponent } from './startjourney.component';

describe('StartjourneyComponent', () => {
  let component: StartjourneyComponent;
  let fixture: ComponentFixture<StartjourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartjourneyComponent]
    });
    fixture = TestBed.createComponent(StartjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
