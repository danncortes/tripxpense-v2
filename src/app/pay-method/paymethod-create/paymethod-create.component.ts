import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PaymethodService } from '../../services/paymethod/paymethod.service';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-paymethod-create',
  templateUrl: './paymethod-create.component.html',
  styleUrls: ['./paymethod-create.component.scss'],
  providers: [
    PaymethodService
  ]
})
export class PaymethodCreateComponent implements OnInit {

  createPayMethodForm: FormGroup;
  processing: boolean;

  constructor(public dialogRef: MdDialogRef<PaymethodCreateComponent>, formBuilder: FormBuilder, private payMethodService: PaymethodService, private router: Router) {

    this.createPayMethodForm = formBuilder.group({
      'name' :  [null, Validators.required]
    });

  }

  ngOnInit() {
  }

  createPaymethod(formData){
    this.processing = true;

    this.payMethodService.create(formData)
            .subscribe(
                (data) => {
                    this.processing = false;
                    this.dialogRef.close()
                    alert('created')
                    //this.toastr.success('Created!', 'Success');
                },
                (err) => {
                    this.processing = false;
                    if(err.status === 422){
                        alert('error')
                        //this.toastr.error('The name has been already taken!', 'Error');
                        return;
                    }
                    alert('error')
                    //this.toastr.error('An error has occur', '');
                }
            )

  }

  data = 'ended';
}
