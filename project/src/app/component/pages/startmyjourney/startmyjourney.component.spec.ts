import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartmyjourneyComponent } from './startmyjourney.component';

describe('StartmyjourneyComponent', () => {
  let component: StartmyjourneyComponent;
  let fixture: ComponentFixture<StartmyjourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartmyjourneyComponent]
    });
    fixture = TestBed.createComponent(StartmyjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
