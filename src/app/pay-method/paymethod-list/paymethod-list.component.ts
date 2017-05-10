import { Component, OnInit } from '@angular/core';
import { PaymethodService } from '../../services/paymethod/paymethod.service';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import {PaymethodCreateComponent } from '../paymethod-create/paymethod-create.component';

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
  selectedOption: string;

  constructor(
    private paymethodService: PaymethodService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.getPayMethods();
  }

  getPayMethods = () => {
    this.processing = true;
    this.paymethodService.get().subscribe(
        data => {
            this.payMethods = data;
            this.processing = false;
        }
    )
  }

  createPayMethodDialog = () => {
    let dialogRef = this.dialog.open(PaymethodCreateComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(data => {
      if(data){
        this.ngOnInit();
      }
    });
  }
}
