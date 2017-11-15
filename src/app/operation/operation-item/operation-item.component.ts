import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation-item',
  templateUrl: './operation-item.component.html',
  styleUrls: ['./operation-item.component.scss']
})
export class OperationItemComponent implements OnInit {

  @Input() operation: any;
  @Input() travels: any;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  travelName: string;
  typeIcon: string;

  constructor() { }

  ngOnInit() {
    this.operation.cost = Number(this.operation.cost);
  }

  deleteOperation = operation =>  this.delete.emit(operation);
  editOperation = operation =>  this.edit.emit(operation);
}

