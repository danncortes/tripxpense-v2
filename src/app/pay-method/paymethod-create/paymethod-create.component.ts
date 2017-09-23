import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymethodService } from '../../services/paymethod/paymethod.service';
import { RouterModule, Router } from '@angular/router';
import { ToastService } from '../../services/toast/toast.service';

@Component({
    selector: 'app-paymethod-create',
    templateUrl: './paymethod-create.component.html',
    styleUrls: ['./paymethod-create.component.scss'],
    providers: [
        PaymethodService,
        ToastService
    ]
})
export class PaymethodCreateComponent implements OnInit {

    createPayMethodForm: FormGroup;
    processing: boolean;

    constructor(
        public dialogRef: MdDialogRef<PaymethodCreateComponent>,
        formBuilder: FormBuilder,
        private payMethodService: PaymethodService,
        private router: Router,
        public toastService: ToastService
    ) {

        this.createPayMethodForm = formBuilder.group({
            'name': [null, Validators.required]
        });
    }

    ngOnInit() {
    }

    createPaymethod(formData) {
        this.processing = true;

        this.payMethodService.create(formData)
            .subscribe(
            (data) => {
                this.processing = false;
                this.dialogRef.close(true);
                this.toastService.success({ message: 'Pay Method Created!' });
            },
            (err) => {
                this.processing = false;
                this.dialogRef.close(false);
                if (err.status === 422) {
                    this.toastService.error({ message: 'The name has been already taken!' });
                    return;
                }
                this.toastService.error({ message: 'An error has occur!' });
            }
            )
    }
}
