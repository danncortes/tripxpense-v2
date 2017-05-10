import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymethodEditComponent } from './paymethod-edit.component';

describe('PaymethodEditComponent', () => {
  let component: PaymethodEditComponent;
  let fixture: ComponentFixture<PaymethodEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymethodEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymethodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
