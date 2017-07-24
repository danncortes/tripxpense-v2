import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';
import { chartsConfig } from '../../../assets/charts.config';

import 'rxjs/Rx';

@Injectable()
export class StatsService {

  constructor(private http: Http) { }

  getPayMethodTravel(params) {
    const user_id = params.user_id;
    const travel_id = params.travel_id;
    return this.http.get(environment.apiUrl + '/stats/paymethod_travel/' + user_id + '/' + travel_id)
      .map(
      (data): any => {
        data = data.json();
        var stats: any = {
          paymethod: {
            type: 'doughnut',
            options: {
              legend: {
                position: 'bottom',
                labels: {
                  fontSize: 11,
                  usePointStyle: true
                }
              }
            },
            income: {
              labels: [],
              data: [],
              colors: [{
                backgroundColor: chartsConfig.colors.income
              }]
            },
            spent: {
              labels: [],
              data: [],
              colors: [{
                backgroundColor: chartsConfig.colors.spent
              }]
            },
            operations: {
              labels: [],
              data: [],
              colors: [{
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
        return stats;
      });
  }

}
