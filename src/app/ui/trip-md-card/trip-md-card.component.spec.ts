import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMdCardComponent } from './trip-md-card.component';

describe('TripMdCardComponent', () => {
  let component: TripMdCardComponent;
  let fixture: ComponentFixture<TripMdCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripMdCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripMdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
