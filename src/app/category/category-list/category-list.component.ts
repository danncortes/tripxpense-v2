import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { CategoryCreateComponent } from '../category-create/category-create.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  providers: [
    CategoryService
  ]
})
export class CategoryListComponent implements OnInit {

  processing: boolean;
  categories: object;

  constructor(
    private categoryService: CategoryService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories = () => {
    this.processing = true;
    this.categoryService.get().subscribe(
      data => {
        this.categories = data;
        this.processing = false;
      }
    )
  }

  createCategoryDialog = () => {
    let dialogRef = this.dialog.open(CategoryCreateComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.ngOnInit();
      }
    });
  }

}
