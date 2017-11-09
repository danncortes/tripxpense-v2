import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operation-item',
  templateUrl: './operation-item.component.html',
  styleUrls: ['./operation-item.component.scss']
})
export class OperationItemComponent implements OnInit {

  @Input() operation: any;
  @Input() travels: any;

  travelName: string;
  typeIcon: string;

  constructor() { }

  ngOnInit() {
    this.operation.cost = Number(this.operation.cost);
  }
}

