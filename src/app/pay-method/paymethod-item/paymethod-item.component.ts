import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymethodService } from '../../services/paymethod/paymethod.service';
import {ToastService} from '../../services/toast/toast.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {PaymethodEditComponent } from '../paymethod-edit/paymethod-edit.component';

@Component({
  selector: 'app-paymethod-item',
  templateUrl: './paymethod-item.component.html',
  styleUrls: ['./paymethod-item.component.scss'],
  providers:[
    PaymethodService,
    ToastService
  ]
})
export class PaymethodItemComponent implements OnInit {

  @Input() payMethod: any;
  @Output() updateView = new EventEmitter();

  constructor(
    private payMethodService: PaymethodService,
    public toastService: ToastService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  removePaymethod = (elem) => {
    this.payMethodService.delete(elem.id)
      .subscribe(
          data => {
              this.updateView.emit();
              this.toastService.success({message: 'Pay Method Deleted!'});
          },
          (err) => {
              this.toastService.error({message: 'An error has occur!'});
          }
      )
  }

  editPaymethod(payMethod){
    let dialogRef = this.dialog.open(PaymethodEditComponent);

    
    dialogRef.componentInstance.payMethod = payMethod; //Passing data to the Dialog, this is received as 'payMethod'
    dialogRef.afterClosed().subscribe(data => {
      if(data){
        this.updateView.emit();
      }
    });
    
  }

}
