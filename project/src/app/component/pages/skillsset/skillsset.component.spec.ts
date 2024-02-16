import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillssetComponent } from './skillsset.component';

describe('SkillssetComponent', () => {
  let component: SkillssetComponent;
  let fixture: ComponentFixture<SkillssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillssetComponent]
    });
    fixture = TestBed.createComponent(SkillssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
