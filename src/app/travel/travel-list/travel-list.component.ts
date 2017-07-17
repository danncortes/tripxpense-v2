import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { TravelService } from '../../services/travel/travel.service';
import { StatsService } from '../../services/stats/stats.service';
import { TravelCreateComponent } from '../travel-create/travel-create.component';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
  providers: [
    TravelService,
    StatsService
  ]
})
export class TravelListComponent implements OnInit {

  processing: boolean;
  travels: any;
  userId: string =  this.getUserId();

  constructor(
    private travelService: TravelService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
    private statsService: StatsService
  ) { }

  ngOnInit() {
    this.getTravels();
  }

  getUserId() {
    return JSON.parse(localStorage.getItem('profile')).clientID;
  }

  getTravels(){
    this.processing = true;
    this.travelService.get(this.userId).subscribe(
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

  /*getStats(travels){
    this.processing = true;
    this.statsService.getPayMethodTravel(this.userId).subscribe(
      data => {
        if (Object.keys(data).length > 0) {
          for (const travel of travels){
            travel.stats = new Object;
            data.filter(function (item) {
              if (item.travel_id === travel.id) {
                travel.stats[item.paymethod_name] = item;
              }
            });
          }
        }
        this.travels = travels;
        this.processing = false;
      }
    );
  }*/
}
