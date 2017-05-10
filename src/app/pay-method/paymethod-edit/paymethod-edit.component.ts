import { Component, OnInit, Input } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PaymethodService } from '../../services/paymethod/paymethod.service';
import { RouterModule, Router} from '@angular/router';
import {ToastService} from '../../services/toast/toast.service';

@Component({
  selector: 'app-paymethod-edit',
  templateUrl: './paymethod-edit.component.html',
  styleUrls: ['./paymethod-edit.component.scss'],
  providers: [
    PaymethodService,
    ToastService
  ]
})
export class PaymethodEditComponent implements OnInit {

  editPayMethodForm: FormGroup;
  processing: boolean;

  @Input() payMethod: any;

  constructor(
    public dialogRef: MdDialogRef<PaymethodEditComponent>,
    formBuilder: FormBuilder,
    private payMethodService: PaymethodService,
    private router: Router,
    public toastService: ToastService
  ) { 

    this.editPayMethodForm = formBuilder.group({
      'name' :  [null, Validators.required]
    });

  }

  ngOnInit() {
    console.log(this.payMethod)
  }

  editPaymethod(formData){
    let id = this.payMethod.id;
    this.processing = true;

    this.payMethodService.update(formData, id)
      .subscribe(
          (data) => {
              this.processing = false;
              this.dialogRef.close(true);
              this.toastService.success({message: 'Pay Method Saved!'});
          },
          (err) => {
              this.processing = false;
              this.dialogRef.close(false);
              if(err.status === 422){
                  this.toastService.error({message: 'The name has been already taken!'});
                  return;
              }
              this.toastService.error({message: 'An error has occur!'});
          }
      )
  }

}
