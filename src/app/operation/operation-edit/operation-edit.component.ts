import { PaymethodService } from './../../services/paymethod/paymethod.service';
import { CategoryService } from './../../services/category/category.service';
import { TravelService } from './../../services/travel/travel.service';
import { AuthService } from './../../services/auth-service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperationService } from './../../services/operation/operation.service';
import { ToastService } from '../../services/toast/toast.service';
import { OperationCreateComponent } from './../operation-create/operation-create.component';

@Component({
    selector: 'app-operation-edit',
    templateUrl: './operation-edit.component.html',
    styleUrls: ['./operation-edit.component.scss'],
    providers: [
        OperationService,
        ToastService,
        TravelService,
        CategoryService,
        PaymethodService
    ]
})
export class OperationEditComponent implements OnInit {

    editOperationForm: FormGroup;
    processing: boolean;
    oldOperation: Object;
    categories: any;
    travels: any
    payMethods: any;

    @Input() operation: any;

    constructor(
        public dialogRef: MdDialogRef<OperationEditComponent>,
        formBuilder: FormBuilder,
        private operationService: OperationService,
        public toastService: ToastService,
        private travelService: TravelService,
        private categoryService: CategoryService,
        private payMethodService: PaymethodService,
        private auth: AuthService,
    ) {
        this.editOperationForm = formBuilder.group({
            'title': [null, Validators.required],
            'description': [null],
            'cost': [null, Validators.required],
            'date_op': [null, Validators.required],
            'type': [null, Validators.required],
            'cod_method': [null, Validators.required],
            'cod_category': [null, Validators.required],
            'cod_travel': [null, Validators.required]
        });
    }

    ngOnInit() {
        Object.assign(this.oldOperation = {}, this.operation);
        this.operation.date_op = new Date(this.operation.date_op);
        this.getTravels();
        this.getCategories();
        this.getPayMethods();
    }

    getTravels = () => {
        const userId = this.auth.getUserId();
        this.travelService.get(userId).subscribe(
            data => {
                this.travels = data;
            }
        );
    }

    getPayMethods = () => {
        this.payMethodService.get().subscribe(
            data => {
                this.payMethods = data;
                this.processing = false;
            }
        );
    }

    getCategories = () => {
        this.categoryService.get().subscribe(
            data => {
                this.categories = data;
            }
        )
    }

    editOperation = (formData) => {
        this.processing = true;

        const operationId = this.operation.id;
        formData.user_id = this.auth.getUserId();

        this.operationService.update(formData, operationId)
            .finally(() => {
                this.processing = false;
            })
            .subscribe(
            data => {
                this.dialogRef.close(true);
                this.toastService.success({ message: 'Operation Updated!' });
            },
            err => {
                this.dialogRef.close(false);
                this.toastService.error({ message: 'An error has occur!' });
            }
            )
    }

}
