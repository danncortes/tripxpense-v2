import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TravelService } from '../../services/travel/travel.service';
import { ToastService } from '../../services/toast/toast.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { TravelEditComponent } from '../travel-edit/travel-edit.component';

@Component({
  selector: 'app-travel-item',
  templateUrl: './travel-item.component.html',
  styleUrls: ['./travel-item.component.scss'],
  providers:[
    TravelService,
    ToastService
  ]
})
export class TravelItemComponent implements OnInit {

  @Input() travel: any;
  @Output() updateView = new EventEmitter();

  constructor(
    private travelService: TravelService,
    public toastService: ToastService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  removeTravel(travel) {
    let message = 'The travel "' + this.travel.name + '" will be deleted!';

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px'
    });
    dialogRef.componentInstance.message = message; //Passing data to the Dialog, this is received as 'payMethod'
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.travelService.delete(travel.id)
          .subscribe(
          data => {
            this.updateView.emit();
            this.toastService.success({ message: 'Travel Deleted!' });
          },
          (err) => {
            this.toastService.error({ message: 'An error has occur!' });
          }
          );
      }
    });
  }

  editTravel(travel){
    let dialogRef = this.dialog.open(TravelEditComponent, {
      width: '500px'
    });

    dialogRef.componentInstance.travel = travel; //Passing data to the Dialog, this is received as 'payMethod'
    dialogRef.afterClosed().subscribe(data => {
      if(data){
        this.updateView.emit();
      }
    });
  }

}
