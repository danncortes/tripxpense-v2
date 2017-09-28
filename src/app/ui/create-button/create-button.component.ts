import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent implements OnInit {

  @Output() createEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  create() {
    this.createEvent.emit();
  }

}
