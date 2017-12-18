import { Component, OnInit } from '@angular/core';
import { PaymethodService } from '../../services/paymethod/paymethod.service';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { ToastService } from '../../services/toast/toast.service';
import { PaymethodCreateComponent } from '../paymethod-create/paymethod-create.component';
import { PaymethodEditComponent } from '../paymethod-edit/paymethod-edit.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-paymethod-list',
    templateUrl: './paymethod-list.component.html',
    styleUrls: ['./paymethod-list.component.scss'],
    providers: [
        PaymethodService,
        ToastService
    ]
})
export class PaymethodListComponent implements OnInit {

    processing: boolean;
    payMethods: Object;

    constructor(
        private paymethodService: PaymethodService,
        public toastService: ToastService,
        public dialog: MdDialog,
        public snackBar: MdSnackBar
    ) { }

    ngOnInit() {
        this.getPayMethods();
    }

    getPayMethods = () => {
        this.processing = true;
        this.paymethodService.get().subscribe(
            data => {
                this.payMethods = data;
                this.processing = false;
            }
        );
    }

    createPayMethodDialog = () => {
        const dialogRef = this.dialog.open(PaymethodCreateComponent, {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.ngOnInit();
            }
        });
    };

    editPayMethod = id => {
        this.paymethodService.find(id)
            .subscribe(
            data => {
                const payMethod = data;
                const dialogRef = this.dialog.open(PaymethodEditComponent, {
                    width: '300px'
                });

                dialogRef.componentInstance.payMethod = payMethod; //Passing data to the Dialog, this is received as 'payMethod'
                dialogRef.afterClosed().subscribe( dialogData => {
                    if (dialogData) {
                        this.ngOnInit();
                    }
                });
            },
            err => {
                this.toastService.error({ message: 'An error has occur!' });
                this.ngOnInit();
            });
    }

    deletePayMethod = elem => {
        const message = `The pay method '${elem.name}' will be deleted!`;

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '300px'
        });
        dialogRef.componentInstance.message = message; //Passing data to the Dialog, this is received as 'payMethod'
        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                this.paymethodService.delete(elem.id)
                    .subscribe(
                    data => {
                        this.ngOnInit();
                        this.toastService.success({ message: 'Pay Method Deleted!' });
                    },
                    err => {
                        this.toastService.error({ message: 'An error has occur!' });
                    }
                    );
            }
        });
    }
}
