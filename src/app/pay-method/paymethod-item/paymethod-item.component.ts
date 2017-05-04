import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymethodService } from '../../services/paymethod/paymethod.service';

@Component({
  selector: 'app-paymethod-item',
  templateUrl: './paymethod-item.component.html',
  styleUrls: ['./paymethod-item.component.scss'],
  providers:[
    PaymethodService
  ]
})
export class PaymethodItemComponent implements OnInit {

  @Input() payMethod: any;
  @Output() updateView = new EventEmitter();


  constructor(private payMethodService: PaymethodService) { }

  ngOnInit() {
  }

  removePaymethod = (elem) => {
    this.payMethodService.delete(elem.id)
        .subscribe(
            data => {
                this.updateView.emit();
                //this.toastr.success('Deleted!', 'Success');
            }
        )
  }

}
