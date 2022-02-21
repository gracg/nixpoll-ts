import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPollResultComponent } from './v-poll-result.component';

describe('VPollResultComponent', () => {
  let component: VPollResultComponent;
  let fixture: ComponentFixture<VPollResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VPollResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VPollResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
