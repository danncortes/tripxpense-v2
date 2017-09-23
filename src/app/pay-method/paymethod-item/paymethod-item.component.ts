import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-paymethod-item',
    templateUrl: './paymethod-item.component.html',
    styleUrls: ['./paymethod-item.component.scss'],
    providers: [
    ]
})
export class PaymethodItemComponent implements OnInit {

    @Input() payMethod: any;
    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();

    constructor(
    ) { }

    ngOnInit() {
    }

    editPayMethod = (id) => {
        this.edit.emit(id);
    }

    deletePayMethod = (elem) => {
        this.delete.emit(elem);
    }
}
