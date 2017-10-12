import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TravelService } from '../../services/travel/travel.service';
import { ToastService } from '../../services/toast/toast.service';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
    selector: 'app-travel-create',
    templateUrl: './travel-create.component.html',
    styleUrls: ['./travel-create.component.scss'],
    providers: [
        TravelService,
        ToastService
    ]
})
export class TravelCreateComponent implements OnInit {

    createTravelForm: FormGroup;
    processing: boolean;

    constructor(
        public dialogRef: MdDialogRef<TravelCreateComponent>,
        formBuilder: FormBuilder,
        private travelService: TravelService,
        public toastService: ToastService,
        public auth: AuthService
    ) {

        this.createTravelForm = formBuilder.group({
            'name': [null, Validators.required],
            'start_date': [null, Validators.required],
            'finish_date': [null, Validators.required],
            'start_cash_balance': 0,
            'start_tdc_balance': 0,
            'start_tdd_balance': 0
        });
    }

    ngOnInit() {
    }

    createTravel = formData => {

        formData.user_id = this.auth.getUserId();

        this.processing = true;

        this.travelService.create(formData)
            .subscribe(
            data => {
                this.processing = false;
                this.dialogRef.close(true);
                this.toastService.success({ message: 'Travel Created!' });
            },
            err => {
                this.processing = false;
                this.dialogRef.close(false);
                this.toastService.error({ message: 'An error has occur!' });
            }
            )
    }

}
