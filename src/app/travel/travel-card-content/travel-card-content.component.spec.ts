import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCardContentComponent } from './travel-card-content.component';

describe('TravelCardContentComponent', () => {
  let component: TravelCardContentComponent;
  let fixture: ComponentFixture<TravelCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
