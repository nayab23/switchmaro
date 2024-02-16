import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMhomeComponent } from './smhome.component';

describe('SMhomeComponent', () => {
  let component: SMhomeComponent;
  let fixture: ComponentFixture<SMhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SMhomeComponent]
    });
    fixture = TestBed.createComponent(SMhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
