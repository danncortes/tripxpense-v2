import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class TravelService {

  constructor(private http: Http) { }

  get() {
    return [
      {
        name: 'Usa',
        start_date: 1499961325000,
        end_date: 1502639725000,
        tdc_start_balance: 2500,
        debit_start_balance: 1600,
        cash_start_balance: 1000,
        stats : {
          tdc : {
            current_balance: 2450,
            spent: 50,
            income: 0,
            operations:1
          },
          debit : {
            current_balance: 1590,
            spent: 10,
            income: 0,
            operations:2
          },
          cash : {
            current_balance: 1000,
            spent: 0,
            income: 0,
            operations:0
          },
          categories:{
            'food': {
              spent: 50,
              operations:1
            }
          }
        }
      },
      {
        name: 'Colombia',
        start_date: 1498881325000,
        end_date: 1508889725000,
        tdc_start_balance: 1800,
        debit_start_balance: 1200,
        cash_start_balance: 900,
        stats : {
          tdc : {
            current_balance: 1650,
            spent: 150,
            income: 0,
            operations:3
          },
          debit : {
            current_balance: 1120,
            spent: 80,
            income: 0,
            operations:4
          },
          cash : {
            current_balance: 1000,
            spent: 0,
            income: 100,
            operations:1
          },
          categories:{
            'food': {
              spent: 50,
              operations:1
            }
          }
        }
      }
    ]
  }
    // return this.http.get(environment.apiUrl + '/category')
    //   .map(
    //     (data): any => data.json()
    //   );
}
