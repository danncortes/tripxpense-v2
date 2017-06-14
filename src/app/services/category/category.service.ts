import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

  get() {
    return this.http.get(environment.apiUrl + '/category')
      .map(
        (data): any => data.json()
      );
  }
}
