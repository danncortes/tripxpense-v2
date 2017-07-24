import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { TravelService } from '../../services/travel/travel.service';
import { TravelCreateComponent } from '../travel-create/travel-create.component';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
  providers: [
    TravelService
  ]
})
export class TravelListComponent implements OnInit {

  processing: boolean;
  travels: any;

  constructor(
    private travelService: TravelService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.getTravels();
  }

  getTravels(){
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
}
