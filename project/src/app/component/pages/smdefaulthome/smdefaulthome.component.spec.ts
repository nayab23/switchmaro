import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMdefaulthomeComponent } from './smdefaulthome.component';

describe('SMdefaulthomeComponent', () => {
  let component: SMdefaulthomeComponent;
  let fixture: ComponentFixture<SMdefaulthomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SMdefaulthomeComponent]
    });
    fixture = TestBed.createComponent(SMdefaulthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
