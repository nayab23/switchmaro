import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrgComponent } from './current-org.component';

describe('CurrentOrgComponent', () => {
  let component: CurrentOrgComponent;
  let fixture: ComponentFixture<CurrentOrgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentOrgComponent]
    });
    fixture = TestBed.createComponent(CurrentOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
