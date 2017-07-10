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
      'pic': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  selectInputFile(event){
    this.createCategoryForm.controls['pic'].setValue(event.target.files[0].name);
  }

  createCategory(formData){
    console.log('datos', formData)
  }

}
