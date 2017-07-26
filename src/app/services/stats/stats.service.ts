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
        (data): any => data.json()
      );
  }

  getCategoryTravel(params) {
    const user_id = params.user_id;
    const travel_id = params.travel_id;
    return this.http.get(environment.apiUrl + '/stats/category_travel/' + user_id + '/' + travel_id)
      .map(
        (data): any => data.json()
      );
  }

}
