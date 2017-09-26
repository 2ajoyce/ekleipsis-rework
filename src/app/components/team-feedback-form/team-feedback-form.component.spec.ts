import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFeedbackFormComponent } from './team-feedback-form.component';

describe('TeamFeedbackFormComponent', () => {
  let component: TeamFeedbackFormComponent;
  let fixture: ComponentFixture<TeamFeedbackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFeedbackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
