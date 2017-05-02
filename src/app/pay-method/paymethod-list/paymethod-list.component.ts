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

  loadedData: boolean;
  payMethods: Object;

  constructor(private PaymethodService: PaymethodService) { }

  ngOnInit() {
    this.getPayMethods();
  }

  getPayMethods(){
    this.loadedData = false;
    this.PaymethodService.get().subscribe(
        data => {
            this.payMethods = data;
            this.loadedData = true;
        }
    )
  }

}
