import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { StatsService } from '../../services/stats/stats.service';
import { chartsConfig } from '../../../assets/charts.config';

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
  hasOperations: boolean;

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
        const params = {
          user_id: travel.user_id,
          travel_id: travel.id
        };
        this.getStats(params);
      });
  }

  getStats(params){
    this.statsService.getPayMethodTravel(params).subscribe(
      data => {
        var stats = {
          paymethod : {
            type : 'doughnut',
            options : {
              legend : {
                position : 'bottom',
                labels : {
                  fontSize: 11,
                  usePointStyle : true
                }
              }
            },
            income : {
              labels : [],
              data : [],
              colors : [{
                backgroundColor: chartsConfig.colors.income
              }]
            },
            spent : {
              labels : [],
              data : [],
              colors : [{
                backgroundColor: chartsConfig.colors.spent
              }]
            },
            operations : {
              labels : [],
              data : [],
              colors : [{
                backgroundColor: chartsConfig.colors.operations
              }]
            }
          }
        };
        for (let key in data) {
          if (key) {
            stats.paymethod['income'].labels.push(data[key].paymethod_name);
            stats.paymethod['income'].data.push(data[key].income);
            stats.paymethod['spent'].labels.push(data[key].paymethod_name);
            stats.paymethod['spent'].data.push(data[key].spent);
            stats.paymethod['operations'].labels.push(data[key].paymethod_name);
            stats.paymethod['operations'].data.push(data[key].operations);
          }
        }
        this.hasOperations = data.find(function (d) {
          return d.operations > 0;
        }) === undefined ? false : true;
        this.stats = stats;
        this.processing = false;
        }
    );
  }

}
