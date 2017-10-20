import { PaymethodService } from './../../services/paymethod/paymethod.service';
import { CategoryService } from './../../services/category/category.service';
import { TravelService } from './../../services/travel/travel.service';
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast/toast.service';
import { OperationService } from '../../services/operation/operation.service';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
    selector: 'app-operation-create',
    templateUrl: './operation-create.component.html',
    styleUrls: ['./operation-create.component.scss'],
    providers: [
        ToastService,
        OperationService,
        TravelService,
        CategoryService,
        PaymethodService
    ]
})
export class OperationCreateComponent implements OnInit {

    createOperationForm: FormGroup;
    processing: boolean;
    categories: any;
    travels: any
    payMethods: any;

    constructor(
        public dialogRef: MdDialogRef<OperationCreateComponent>,
        formBuilder: FormBuilder,
        private OperationService: OperationService,
        public toastService: ToastService,
        private travelService: TravelService,
        private categoryService: CategoryService,
        private payMethodService: PaymethodService,
        private auth: AuthService
    ) {
        this.createOperationForm = formBuilder.group({
            'title': [null, Validators.required],
            'description': [null],
            'cost': [null, Validators.required],
            'date_op': [null, Validators.required],
            'type': ['outcome', Validators.required],
            'cod_method': [null, Validators.required],
            'cod_category': [null, Validators.required],
            'cod_travel': [null, Validators.required]
        });
    }

    ngOnInit() {
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

    createOperation(formData) {
        this.processing = true;
        formData.user_id = this.auth.getUserId();

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
