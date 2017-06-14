import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';

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
    private categoryService: CategoryService
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

}
