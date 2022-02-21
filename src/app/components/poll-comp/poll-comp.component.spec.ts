import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCompComponent } from './poll-comp.component';

describe('PollCompComponent', () => {
  let component: PollCompComponent;
  let fixture: ComponentFixture<PollCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
