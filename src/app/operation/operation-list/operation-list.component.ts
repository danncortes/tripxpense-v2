import { ToastService } from './../../services/toast/toast.service';
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OperationService } from '../../services/operation/operation.service';
import { TravelService } from './../../services/travel/travel.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { OperationCreateComponent } from '../operation-create/operation-create.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-operation-list',
    templateUrl: './operation-list.component.html',
    styleUrls: ['./operation-list.component.scss'],
    providers: [
        OperationService,
        ToastService,
        TravelService
    ]
})
export class OperationListComponent implements OnInit {

    processing: boolean;
    operations: any;
    travels: any;
    operationFilter: any;
    sortDirection = '';
    sortBy: string;
    sortByArray: any;
    listViewType: any;

    constructor(
        private operationService: OperationService,
        public dialog: MdDialog,
        public auth: AuthService,
        public travelService: TravelService,
        private toastService: ToastService ) { }

    ngOnInit() {

        this.sortByArray = [
            {
                name: 'Title',
                value: 'title'
            },
            {
                name: 'Cost',
                value: 'cost'
            },
            {
                name: 'Date',
                value: 'date_op'
            },
            {
                name: 'Travel',
                value: 'cod_travel'
            },
            {
                name: 'Type',
                value: 'type'
            },
            {
                name: 'Method',
                value: 'cod_method'
            }
        ]

        this.getOperations();
    }

    getListType = (type) => {
        this.listViewType = type
    }

    getSortBy = (event) => {
        this.sortBy = event
    }

    getSortDirection = (direction) => {
        this.sortDirection = direction
    }

    getOperations = () => {
        const userId = this.auth.getUserId();
        this.processing = true;
        this.operationService.get(userId).subscribe(
            data => {
                this.travelService.get(userId).subscribe(
                    travels => {
                        this.travels = travels;
                        this.processing = false;
                    }
                )
                this.operations = data;
            }
        )
    }

    createOperationDialog = () => {
        const dialogRef = this.dialog.open(OperationCreateComponent, {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.ngOnInit();
            }
        });
    }

    deleteOperation = operation => {
        const message = 'The operation "' + operation.title + '" will be deleted!';
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '300px'
        });
        dialogRef.componentInstance.message = message; //Passing data to the Dialog, this is received as 'payMethod'
        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                this.operationService.delete(operation.id)
                    .subscribe(
                    data => {
                        this.ngOnInit();
                        this.toastService.success({ message: 'Operation Deleted!' });
                    },
                    err => {
                        this.toastService.error({ message: 'An error has occur!' });
                    }
                    );
            }
        });
    };

}
