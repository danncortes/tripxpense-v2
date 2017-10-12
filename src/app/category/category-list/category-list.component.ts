import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { ToastService } from '../../services/toast/toast.service';
import { CategoryService } from '../../services/category/category.service';
import { CategoryCreateComponent } from '../category-create/category-create.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss'],
    providers: [
        CategoryService,
        ToastService
    ]
})
export class CategoryListComponent implements OnInit {

    processing: boolean;
    categories: object;

    constructor(
        private categoryService: CategoryService,
        public dialog: MdDialog,
        public snackBar: MdSnackBar,
        public toastService: ToastService
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
        const dialogRef = this.dialog.open(CategoryCreateComponent, {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.ngOnInit();
            }
        });
    }

    deleteCategory = category => {
        const message = 'The category "' + category.name + '" will be deleted!';

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '300px'
        });
        dialogRef.componentInstance.message = message; //Passing data to the Dialog, this is received as 'payMethod'
        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                this.categoryService.delete(category.id)
                    .subscribe(
                    data => {
                        this.ngOnInit();
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
