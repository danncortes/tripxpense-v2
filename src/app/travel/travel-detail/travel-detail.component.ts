import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { StatsService } from '../../services/stats/stats.service';
import { TravelService } from '../../services/travel/travel.service';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss'],
  providers:[
    StatsService,
    TravelService
  ]
})
export class TravelDetailComponent implements OnInit {

  travel: any;
  processing: boolean;
  stats: object;
  statsParam: any;
  travelId: number;

  constructor(
    private route: ActivatedRoute,
    private statsService: StatsService,
    private travelService: TravelService,
  ) { }

  ngOnInit() {
    this.processing = true;
    this.route
      .queryParams
      .subscribe(travel => {
        this.travelService.find(travel.id).subscribe(
            data => {
                this.travel = data;
                this.processing = false;
            }
        );
        this.statsParam = {
          user_id: travel.user_id,
          travel_id: travel.id
        };
      });
  }

}
