import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  processing: boolean;

  constructor() { }

  ngOnInit() {
    this.getTravels()
  }

  getTravels(){
    
  }

}
