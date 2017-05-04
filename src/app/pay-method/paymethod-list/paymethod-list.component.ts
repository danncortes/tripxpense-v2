import { Component, OnInit } from '@angular/core';
import { PaymethodService } from '../../services/paymethod/paymethod.service';

@Component({
  selector: 'app-paymethod-list',
  templateUrl: './paymethod-list.component.html',
  styleUrls: ['./paymethod-list.component.scss'],
  providers:[
    PaymethodService
  ]
})
export class PaymethodListComponent implements OnInit {

  processing: boolean;
  payMethods: Object;

  constructor(private paymethodService: PaymethodService) { }

  ngOnInit() {
    this.getPayMethods();
  }

  getPayMethods(){
    this.processing = true;
    this.paymethodService.get().subscribe(
        data => {
            this.payMethods = data;
            this.processing = false;
        }
    )
  }
}
