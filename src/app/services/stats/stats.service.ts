import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class StatsService {

  constructor(private http: Http) { }

  getPayMethodTravel(userId) {
    return this.http.get(environment.apiUrl + '/stats/paymethod_travel/' + userId)
      .map(
        (data): any => data.json()
      );
  }

}
