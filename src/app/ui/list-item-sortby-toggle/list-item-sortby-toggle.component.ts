import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item-sortby-toggle',
  templateUrl: './list-item-sortby-toggle.component.html',
  styleUrls: ['./list-item-sortby-toggle.component.scss']
})
export class ListItemSortbyToggleComponent implements OnInit {

  @Output() sortByEmitter = new EventEmitter();
  @Input() sortByArray: any;

  listViewSortBy: any;

  constructor() { }

  ngOnInit() {
    this.listViewSortBy = this.sortByArray[0].value;
    this.changeSortBy(this.listViewSortBy);
  }

  changeSortBy = sortBy => this.sortByEmitter.emit(sortBy);

}
