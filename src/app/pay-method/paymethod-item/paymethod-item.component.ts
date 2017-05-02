import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paymethod-item',
  templateUrl: './paymethod-item.component.html',
  styleUrls: ['./paymethod-item.component.scss']
})
export class PaymethodItemComponent implements OnInit {

  @Input()
  payMethod: any;

  constructor() { }

  ngOnInit() {
  }

}
