import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { OperationService } from '../../services/operation/operation.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { ToastService } from '../../services/toast/toast.service';
import { OperationCreateComponent } from '../operation-create/operation-create.component';

@Component({
    selector: 'app-operation-list',
    templateUrl: './operation-list.component.html',
    styleUrls: ['./operation-list.component.scss'],
    providers: [
        OperationService,
        ToastService
    ]
})
export class OperationListComponent implements OnInit {

    processing: boolean;
    operations: any;

    constructor(
        private operationService: OperationService,
        public dialog: MdDialog,
        public auth: AuthService, ) { }

    ngOnInit() {
        this.getOperations();
    }

    getOperations() {
        const userId = this.auth.getUserId();
        this.processing = true;
        this.operationService.get(userId).subscribe(
            data => {
                this.operations = data;
                this.processing = false;
            }
        )
    }

    createOperationDialog() {
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
