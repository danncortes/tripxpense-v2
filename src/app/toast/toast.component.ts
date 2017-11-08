import { Component, OnInit, Input, Inject } from '@angular/core';
import { MD_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(@Inject(MD_SNACK_BAR_DATA) public data: any ) { }

  ngOnInit() {
    //console.log(this.data)
  }

}
