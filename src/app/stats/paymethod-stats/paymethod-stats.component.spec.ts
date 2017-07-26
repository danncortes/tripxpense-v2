import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymethodStatsComponent } from './paymethod-stats.component';

describe('PaymethodStatsComponent', () => {
  let component: PaymethodStatsComponent;
  let fixture: ComponentFixture<PaymethodStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymethodStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymethodStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
