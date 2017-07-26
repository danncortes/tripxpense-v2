import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { StatsService } from '../../services/stats/stats.service';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss'],
  providers:[
    StatsService
  ]
})
export class TravelDetailComponent implements OnInit {

  travel: any;
  processing: boolean;
  stats: object;
  statsParam: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private statsService: StatsService,
  ) { }

  ngOnInit() {
    this.processing = true;
    this.route
      .queryParams
      .subscribe(travel => {
        this.travel = travel;
        this.statsParam = {
          user_id: travel.user_id,
          travel_id: travel.id
        };
        this.processing = false;
      });
  }

}
