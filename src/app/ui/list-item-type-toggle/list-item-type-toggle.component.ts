import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ListViewTypeService } from '../../services/list-view-type/list-view-type.service';

@Component({
  selector: 'app-list-item-type-toggle',
  templateUrl: './list-item-type-toggle.component.html',
  styleUrls: ['./list-item-type-toggle.component.scss'],
  providers: [
    ListViewTypeService
  ]
})
export class ListItemTypeToggleComponent implements OnInit {

  @Output() typeEmitter = new EventEmitter();
  @Input() view: string;

  listViewType: any;

  constructor(
    public listViewTypeService: ListViewTypeService
  ) { }

  ngOnInit() {
    this.listViewType = this.listViewTypeService.get(this.view);
    this.changeType(this.listViewType);
  }

  changeType = (type) => {
    this.listViewTypeService.set(this.view, type);
    this.typeEmitter.emit(type)
  };

}
