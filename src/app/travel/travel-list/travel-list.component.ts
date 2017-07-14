import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { TravelService } from '../../services/travel/travel.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
  providers:[
    TravelService
  ]
})
export class TravelListComponent implements OnInit {

  processing: boolean;
  travels:any

  constructor(
    private travelService: TravelService
  ) { }

  ngOnInit() {
    this.getTravels()
  }

  getTravels(){
    this.travels = [
      {
        name: 'Usa',
        start_date: 1499961325000,
        end_date: 1502639725000,
        tdc_start_balance: 2500,
        debit_start_balance: 1600,
        cash_start_balance: 1000,
        stats : {
          'CREDIT CARD' : {
            current_balance: 2450,
            spent: 50,
            income: 0,
            operations:1
          },
          'DEBIT_CARD' : {
            current_balance: 1590,
            spent: 10,
            income: 0,
            operations:2
          },
          'CASH' : {
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
          'CREDIT CARD' : {
            current_balance: 1650,
            spent: 150,
            income: 0,
            operations:3
          },
          'DEBIT CARD' : {
            current_balance: 1120,
            spent: 80,
            income: 0,
            operations:4
          },
          'CASH' : {
            current_balance: 1000,
            spent: 0,
            income: 100,
            operations:2
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

}
