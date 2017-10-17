import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast/toast.service';
import { OperationService } from '../../services/operation/operation.service';

@Component({
    selector: 'app-operation-create',
    templateUrl: './operation-create.component.html',
    styleUrls: ['./operation-create.component.scss'],
    providers: [
        ToastService,
        OperationService
    ]
})
export class OperationCreateComponent implements OnInit {

    createOperationForm: FormGroup;
    processing: boolean;

    constructor(
        public dialogRef: MdDialogRef<OperationCreateComponent>,
        formBuilder: FormBuilder,
        private OperationService: OperationService,
        public toastService: ToastService
    ) {
        this.createOperationForm = formBuilder.group({
            'title': [null, Validators.required],
            'description': [null],
            'cost': [null, Validators.required],
            'date_op': [null, Validators.required],
            'type': [1, Validators.required]
        });
    }

    ngOnInit() {
    }

    createOperation(formData) {
        this.processing = true;

        this.OperationService.create(formData)
            .subscribe(
                data => {
                    this.processing = false;
                    this.dialogRef.close(true);
                    this.toastService.success({ message: 'Operation Created!' });
                },
                err => {
                    this.processing = false;
                    this.dialogRef.close(false);
                    this.toastService.error({ message: 'An error has occur!' });
                }
            )
    }

}
