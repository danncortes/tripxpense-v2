import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-paymethod-create',
  templateUrl: './paymethod-create.component.html',
  styleUrls: ['./paymethod-create.component.scss']
})
export class PaymethodCreateComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<PaymethodCreateComponent>) { }

  ngOnInit() {
  }

  data = 'ended';
}
