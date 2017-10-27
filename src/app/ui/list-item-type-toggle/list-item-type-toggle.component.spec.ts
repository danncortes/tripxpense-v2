import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemTypeToggleComponent } from './list-item-type-toggle.component';

describe('ListItemTypeToggleComponent', () => {
  let component: ListItemTypeToggleComponent;
  let fixture: ComponentFixture<ListItemTypeToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemTypeToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemTypeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
