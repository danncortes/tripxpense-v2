import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { ToastService } from '../../services/toast/toast.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  providers: [
    CategoryService,
    ToastService
  ]
})
export class CategoryItemComponent implements OnInit {

  @Input() category: any;
  @Output() updateView = new EventEmitter();

  constructor(
    private categoryService: CategoryService,
    public toastService: ToastService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  editCategory(category) {
  }

  removeCategory(category) {
    let message = 'The category "' + this.category.name + '" will be deleted!';

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px'
    });
    dialogRef.componentInstance.message = message; //Passing data to the Dialog, this is received as 'payMethod'
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.categoryService.delete(category.id)
          .subscribe(
          data => {
            this.updateView.emit();
            this.toastService.success({ message: 'Category Deleted!' });
          },
          (err) => {
            this.toastService.error({ message: 'An error has occur!' });
          }
          );
      }
    });
  }

}
