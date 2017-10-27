import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item-sort-toggle',
  templateUrl: './list-item-sort-toggle.component.html',
  styleUrls: ['./list-item-sort-toggle.component.scss']
})
export class ListItemSortToggleComponent implements OnInit {

  @Output() sortEmitter = new EventEmitter();

  listViewSort: any = '';

  constructor() { }

  ngOnInit() {
  }

  changeSort = (type) => {
    this.sortEmitter.emit(type)
  }

}
