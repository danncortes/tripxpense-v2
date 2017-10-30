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
    const ope = this.operation;
    const travel = this.travels.filter(function(item) {
      return item.id === Number(ope.cod_travel)
    })
    this.travelName = travel[0].name;

  }

}
