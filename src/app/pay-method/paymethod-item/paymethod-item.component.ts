import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymethodService } from '../../services/paymethod/paymethod.service';
import {ToastService} from '../../services/toast/toast.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {PaymethodEditComponent } from '../paymethod-edit/paymethod-edit.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

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
    let message  = 'The pay method "' + this.payMethod.name + '" will be deleted!';

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px'
    });
    dialogRef.componentInstance.message = message; //Passing data to the Dialog, this is received as 'payMethod'
    dialogRef.afterClosed().subscribe(response => {
      if(response){
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
    })
  }

  editPaymethod(payMethod){
    let dialogRef = this.dialog.open(PaymethodEditComponent, {
      width: '300px'
    });

    dialogRef.componentInstance.payMethod = payMethod; //Passing data to the Dialog, this is received as 'payMethod'
    dialogRef.afterClosed().subscribe(data => {
      if(data){
        this.updateView.emit();
      }
    });
  }

}
