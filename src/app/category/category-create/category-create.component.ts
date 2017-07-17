import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CategoryService } from '../../services/category/category.service';
import { RouterModule, Router} from '@angular/router';
import {ToastService} from '../../services/toast/toast.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
  providers:[
    CategoryService,
    ToastService
  ]
})
export class CategoryCreateComponent implements OnInit {

  createCategoryForm: FormGroup;
  processing: boolean; 
  form: any

  constructor(
    public dialogRef: MdDialogRef<CategoryCreateComponent>,
    formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    public toastService: ToastService
  ) {

    this.createCategoryForm = formBuilder.group({
      'name' :  ['', Validators.required],
      'sort' : '',
      'pic': ['', Validators.required],
      'file' : ''
    });
  }

  ngOnInit() {
  }

  selectInputFile(event){
    this.createCategoryForm.controls['pic'].setValue(event.target.files[0].name);
    this.createCategoryForm.controls['file'].setValue(event.target.files[0]);
  }

  createCategory(formData){
    this.processing = true;
    this.categoryService.create(formData)
      .subscribe(
          (data) => {
              this.processing = false;
              this.dialogRef.close(true);
              this.toastService.success({message: 'Category Created!'});
          },
          (err) => {
              this.processing = false;
              this.dialogRef.close(false);
              if(err.status === 422){
                  this.toastService.error({message: 'The name has been already taken!'});
                  return;
              }
              this.toastService.error({message: 'An error has occur!'});
          }
      )
  }

}
