import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class TravelService {

  constructor(private http: Http) { }

  get(userId) {
    return this.http.get(environment.apiUrl + '/travel/' + userId)
      .map(
        data => data.json()
      );
  }

  create(travel) { 
    return this.http.post(environment.apiUrl + '/travel/create', travel)
        .map(
          data => data.json()
        );
  }

  update(formData, travel_id){
    return this.http.put(environment.apiUrl + '/travel/update/' + travel_id, formData)
        .map(
          data => data.json()
        );
  }

  delete(id){
    return this.http.delete(environment.apiUrl + '/travel/' + id)
      .map(
        data => data.json()
      );
  }
}
