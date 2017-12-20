import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class OperationService {

    constructor(private http: Http) { }

    get = userId => {
        return this.http.get(environment.apiUrl + '/operations/' + userId)
            .map(
            (data): any => data.json()
            );
    }

    find(operationId) {
        return this.http.get(environment.apiUrl + '/operation/' + operationId)
            .map(
            (data): any => data.json()
            );
    }

    getOperationsByTravels = (userId, travelId) => {
        return this.http.get(environment.apiUrl + '/operations_by_travel/' + userId + '/' + travelId)
            .map(
            (data): any => data.json()
            );
    }

    create(operation) {
        return this.http.post(environment.apiUrl + '/operation/create', operation)
            .map(
            (data): any => data.json()
            );
    }

    update(formData, operationId) {
        return this.http.put(environment.apiUrl + '/operation/update/' + operationId, formData)
            .map(
                (data): any => data.json()
            );
    }

    delete = id => {
        return this.http.delete(environment.apiUrl + '/operation/' + id)
            .map(
            (data): any => data.json()
            );
    }

}
