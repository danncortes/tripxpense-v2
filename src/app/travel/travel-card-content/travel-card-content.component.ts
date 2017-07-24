import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-card-content',
  templateUrl: './travel-card-content.component.html',
  styleUrls: ['./travel-card-content.component.scss']
})
export class TravelCardContentComponent implements OnInit {

  @Input() travel: any;

  constructor() { }

  ngOnInit() {
  }

}
