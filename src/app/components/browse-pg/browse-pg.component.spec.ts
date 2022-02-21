import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePgComponent } from './browse-pg.component';

describe('BrowsePgComponent', () => {
  let component: BrowsePgComponent;
  let fixture: ComponentFixture<BrowsePgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsePgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsePgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
