import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OperationService } from '../../services/operation/operation.service';
import { TravelService } from './../../services/travel/travel.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { ToastService } from '../../services/toast/toast.service';
import { OperationCreateComponent } from '../operation-create/operation-create.component';

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

    constructor(
        private operationService: OperationService,
        public dialog: MdDialog,
        public auth: AuthService,
        public travelService: TravelService ) { }

    ngOnInit() {
        this.getOperations();
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

}
