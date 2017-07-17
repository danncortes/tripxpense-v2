import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class PaymethodService {

  constructor(private http: Http) { }

  get() {
    return this.http.get(environment.apiUrl + '/pay_method')
      .map(
        (data): any => data.json()
      );
  }

  find(data) {
    return this.http.get(environment.apiUrl + '/pay_method/' + data.id)
      .map(
        (data): any => data.json()
      );
  }

  create(payMethod) { 
    return this.http.post(environment.apiUrl + '/pay_method/create', payMethod)
        .map(
          data => data.json()
        );
  }

  update(payMethod, id){
    return this.http.put(environment.apiUrl + '/pay_method/update/' + id, payMethod)
        .map(
          data => data.json()
        )
  }

  delete(id){
    return this.http.delete(environment.apiUrl + '/pay_method/' + id)
      .map(
        data => data.json()
      );
  }
}
