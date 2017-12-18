import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TravelService } from '../../services/travel/travel.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
    selector: 'app-travel-edit',
    templateUrl: './travel-edit.component.html',
    styleUrls: ['./travel-edit.component.scss'],
    providers: [
        TravelService,
        ToastService
    ]
})
export class TravelEditComponent implements OnInit {

    editTravelForm: FormGroup;
    processing: boolean;
    hasOperations: boolean;

    @Input() travel: any;

    constructor(
        public dialogRef: MdDialogRef<TravelEditComponent>,
        formBuilder: FormBuilder,
        private travelService: TravelService,
        public toastService: ToastService,
    ) {

        this.editTravelForm = formBuilder.group({
            'name': [null, Validators.required],
            'start_date': [null, Validators.required],
            'finish_date': [null, Validators.required],
            'start_cash_balance': 0,
            'start_tdc_balance': 0,
            'start_tdd_balance': 0
        });
    }

    ngOnInit() {
        this.travel.start_date = new Date(this.travel.start_date);
        this.travel.finish_date = new Date(this.travel.finish_date);
        this.hasOperations = this.travel.operations === 0 ? false : true;
        if (this.hasOperations) {
            this.editTravelForm.controls.start_cash_balance.disable();
            this.editTravelForm.controls.start_tdc_balance.disable();
            this.editTravelForm.controls.start_tdd_balance.disable();
        }
    }

    editTravel = formData => {

        if (this.hasOperations) {
            formData.start_cash_balance = this.travel.start_cash_balance;
            formData.start_tdd_balance = this.travel.start_tdd_balance;
            formData.start_tdc_balance = this.travel.start_tdc_balance;
        }

        const travel_id = this.travel.id;
        this.processing = true;

        this.travelService.update(formData, travel_id)
            .finally(() => {
                this.processing = false;
            })
            .subscribe(
            data => {
                this.dialogRef.close(true);
                this.toastService.success({ message: 'Travel Saved!' });
            },
            err => {
                this.dialogRef.close();
                this.toastService.error({ message: 'An error has occur!' });
            }
            );
    }

}
