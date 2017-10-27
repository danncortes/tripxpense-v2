import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSortbyToggleComponent } from './list-item-sortby-toggle.component';

describe('ListItemSortbyToggleComponent', () => {
  let component: ListItemSortbyToggleComponent;
  let fixture: ComponentFixture<ListItemSortbyToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemSortbyToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemSortbyToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
