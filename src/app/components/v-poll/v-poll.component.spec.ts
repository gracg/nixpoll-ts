import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPollComponent } from './v-poll.component';

describe('VPollComponent', () => {
  let component: VPollComponent;
  let fixture: ComponentFixture<VPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
