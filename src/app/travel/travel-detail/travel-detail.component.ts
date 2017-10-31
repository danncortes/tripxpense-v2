import { OperationService } from './../../services/operation/operation.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StatsService } from '../../services/stats/stats.service';
import { TravelService } from '../../services/travel/travel.service';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss'],
  providers: [
    StatsService,
    TravelService,
    OperationService
  ]
})
export class TravelDetailComponent implements OnInit {

  travel: any;
  processing: boolean;
  stats: object;
  statsParam: any;
  processingOperations: boolean;
  operations: any;
  travels: any;

  constructor(
    private route: ActivatedRoute,
    private statsService: StatsService,
    private travelService: TravelService,
    private operationService: OperationService
  ) { }

  ngOnInit() {
    this.processing = true;
    this.route
      .queryParams
      .subscribe(travelParams => {
        this.travelService.find(travelParams.travelId).subscribe(
          data => {
            this.travel = data;
            this.processing = false;
            this.statsParam = {
              user_id: travelParams.userId,
              travel_id: travelParams.travelId
            };
          }
        );
        this.processingOperations = true;
        this.operationService.getOperationsByTravels(travelParams.userId, travelParams.travelId).subscribe(
          data => {
            this.travelService.get(travelParams.userId).subscribe(
              travels => {
                this.travels = travels;
                this.operations = data;
                this.processingOperations = false;
              }
            )
          }
        )
      });
  }

}
