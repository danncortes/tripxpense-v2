import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymethodListComponent } from './paymethod-list.component';

describe('PaymethodListComponent', () => {
  let component: PaymethodListComponent;
  let fixture: ComponentFixture<PaymethodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymethodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymethodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
