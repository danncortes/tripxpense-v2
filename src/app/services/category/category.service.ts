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

  create(category) {
    return this.http.post(environment.apiUrl + '/category/create', category)
      .map(
        (data): any => data.json()
      );
  }

  delete(id){
    return this.http.delete(environment.apiUrl + '/category/' + id)
      .map(
        data => data.json()
      );
  }
}
