import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  create(userFormData) {
    return this.http.post(environment.apiUrl + '/user/create', userFormData)
      .map(
        (data):any => data.json()
      )
  }

}
