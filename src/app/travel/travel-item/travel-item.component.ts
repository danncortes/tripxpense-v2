import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-travel-item',
  templateUrl: './travel-item.component.html',
  styleUrls: ['./travel-item.component.scss'],
  providers:[
  ]
})
export class TravelItemComponent implements OnInit {

  @Input() travel: any;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
  }

  deleteTravel(travel) {
    this.delete.emit(travel);
  };

  editTravel(travelId) {
    this.edit.emit(travelId);
  };

}
