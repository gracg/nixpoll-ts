import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpPollPromptComponent } from './lp-poll-prompt.component';

describe('LpPollPromptComponent', () => {
  let component: LpPollPromptComponent;
  let fixture: ComponentFixture<LpPollPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpPollPromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LpPollPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
