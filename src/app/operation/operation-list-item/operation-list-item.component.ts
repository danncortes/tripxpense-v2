import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operation-list-item',
  templateUrl: './operation-list-item.component.html',
  styleUrls: ['./operation-list-item.component.scss']
})
export class OperationListItemComponent implements OnInit {

  @Input() operation;
  @Input() travels;

  travelName: string;

  constructor() { }

  ngOnInit() {
    this.operation.cost = Number(this.operation.cost);
  }

}
