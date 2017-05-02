import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymethodItemComponent } from './paymethod-item.component';

describe('PaymethodItemComponent', () => {
  let component: PaymethodItemComponent;
  let fixture: ComponentFixture<PaymethodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymethodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymethodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
