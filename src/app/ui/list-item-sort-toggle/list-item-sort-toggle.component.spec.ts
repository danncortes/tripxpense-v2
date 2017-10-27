import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSortToggleComponent } from './list-item-sort-toggle.component';

describe('ListItemSortToggleComponent', () => {
  let component: ListItemSortToggleComponent;
  let fixture: ComponentFixture<ListItemSortToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemSortToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemSortToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
