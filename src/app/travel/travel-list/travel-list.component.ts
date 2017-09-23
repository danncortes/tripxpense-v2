import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { TravelService } from '../../services/travel/travel.service';
import { TravelCreateComponent } from '../travel-create/travel-create.component';
import { AuthService } from '../../services/auth-service/auth.service';
import { ToastService } from '../../services/toast/toast.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { TravelEditComponent } from '../travel-edit/travel-edit.component';

@Component({
    selector: 'app-travel-list',
    templateUrl: './travel-list.component.html',
    styleUrls: ['./travel-list.component.scss'],
    providers: [
        TravelService,
        ToastService
    ]
})
export class TravelListComponent implements OnInit {

    processing: boolean;
    travels: any;

    constructor(
        private travelService: TravelService,
        public dialog: MdDialog,
        public snackBar: MdSnackBar,
        public auth: AuthService,
        public toastService: ToastService
    ) { }

    ngOnInit() {
        this.getTravels();
    }

    getTravels() {
        var userId = this.auth.getUserId();
        this.processing = true;
        this.travelService.get(userId).subscribe(
            data => {
                this.travels = data;
                this.processing = false;
            }
        );
    }

    createTravelDialog = () => {
        let dialogRef = this.dialog.open(TravelCreateComponent, {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.ngOnInit();
            }
        });
    }

    deleteTravel(travel) {
        let message = 'The travel "' + travel.name + '" will be deleted!';
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '300px'
        });
        dialogRef.componentInstance.message = message; //Passing data to the Dialog, this is received as 'payMethod'
        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                this.travelService.delete(travel.id)
                    .subscribe(
                    data => {
                        this.ngOnInit();
                        this.toastService.success({ message: 'Travel Deleted!' });
                    },
                    (err) => {
                        this.toastService.error({ message: 'An error has occur!' });
                    }
                    );
            }
        });
    };

    editTravel(travelId) {
        this.travelService.find(travelId)
            .subscribe(
            data => {
                let dialogRef = this.dialog.open(TravelEditComponent, {
                    width: '500px'
                });
                dialogRef.componentInstance.travel = data; //Passing data to the Dialog, this is received as 'payMethod'
                dialogRef.afterClosed().subscribe(data => {
                    if (data) {
                        this.ngOnInit();
                    }
                });
            },
            (err) => {
                this.toastService.error({ message: 'An error has occur!' });
            }
            );
    }
}
