import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-category-item',
    templateUrl: './category-item.component.html',
    styleUrls: ['./category-item.component.scss'],
    providers: [
    ]
})
export class CategoryItemComponent implements OnInit {

    @Input() category: any;
    @Output() delete = new EventEmitter();

    constructor(
    ) { }

    ngOnInit() {
    };

    deleteCategory = category => this.delete.emit(category);
}
