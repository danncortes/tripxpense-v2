import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TravelService } from '../../services/travel/travel.service';
import { ToastService } from '../../services/toast/toast.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-travel-item',
  templateUrl: './travel-item.component.html',
  styleUrls: ['./travel-item.component.scss'],
  providers:[
    TravelService,
    ToastService
  ]
})
export class TravelItemComponent implements OnInit {

  @Input() travel: any;
  @Output() updateView = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
