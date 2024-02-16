import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralformComponent } from './referralform.component';

describe('ReferralformComponent', () => {
  let component: ReferralformComponent;
  let fixture: ComponentFixture<ReferralformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralformComponent]
    });
    fixture = TestBed.createComponent(ReferralformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
