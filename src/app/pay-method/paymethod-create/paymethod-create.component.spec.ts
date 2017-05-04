import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymethodCreateComponent } from './paymethod-create.component';

describe('PaymethodCreateComponent', () => {
  let component: PaymethodCreateComponent;
  let fixture: ComponentFixture<PaymethodCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymethodCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymethodCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
