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
    sortDirection = '';
    sortByArray: any;
    sortBy: string;
    travelFilter: any;

    constructor(
        private travelService: TravelService,
        public dialog: MdDialog,
        public snackBar: MdSnackBar,
        public auth: AuthService,
        public toastService: ToastService
    ) { }

    ngOnInit() {
        this.sortByArray = [
            {
                name: 'Start Date',
                value: 'start_date'
            },
            {
                name: 'Name',
                value: 'name'
            }
        ]
        this.getTravels();
    }

    getSortDirection = (direction) => {
        this.sortDirection = direction
    }

    getSortByDirection = (event) => {
        this.sortBy = event
    }

    getTravels = () => {
        const userId = this.auth.getUserId();
        this.processing = true;
        this.travelService.get(userId).subscribe(
            data => {
                this.travels = data;
                this.processing = false;
            }
        );
    }

    createTravelDialog = () => {
        const dialogRef = this.dialog.open(TravelCreateComponent, {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.ngOnInit();
            }
        });
    }

    deleteTravel = travel => {
        const message = `The travel '${travel.name}' will be deleted!`;
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
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
                    err => {
                        this.toastService.error({ message: 'An error has occur!' });
                    }
                    );
            }
        });
    };

    editTravel = travelId => {
        this.travelService.find(travelId)
            .subscribe(
                data => {
                    const dialogRef = this.dialog.open(TravelEditComponent, {
                        width: '500px'
                    });
                    dialogRef.componentInstance.travel = data; //Passing data to the Dialog, this is received as 'payMethod'
                    dialogRef.afterClosed().subscribe(response => {
                        if (response) {
                            this.ngOnInit();
                        }
                    });
                },
                err => {
                    this.toastService.error({ message: 'An error has occur!' });
                }
            );
    }
}
