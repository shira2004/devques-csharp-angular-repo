import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';
import { APP_ROUTES } from '../../../app_routes';

@Component({
  selector: 'app-category-selction',
  templateUrl: './category-selction.component.html',
  styleUrls: ['./category-selction.component.css']
})
export class CategorySelctionComponent implements OnInit {
  public categoryList!: Category[];
  selectedCategories: number[] = [];
  chipsColor: string = '';
  
  constructor(private _categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this._categoryService.getAllCategoriesByServer().subscribe({
      next: (res) => {
        this.categoryList = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  categorySelected(categoryId: number): void {
    if (this.selectedCategories.includes(categoryId)) {
      this.selectedCategories = this.selectedCategories.filter((selectedId) => selectedId !== categoryId);
    } else {
      this.selectedCategories.push(categoryId);
      console.log('add to list of categories');
      this.chipsColor = 'blue';
    }
  }

  isCategorySelected(categoryId: number): boolean {
    return this.selectedCategories.includes(categoryId);
  }

  confirmSelectionQuestion(): void {
    console.log('Selected Categories:', this.selectedCategories);

    this.router.navigate([APP_ROUTES.QUES_LIST], {
      queryParams: { categories: this.selectedCategories.join(',') }
    });
  }

  confirmSelectionQuiz(): void {
    console.log('Selected Categories:', this.selectedCategories);

    this.router.navigate([APP_ROUTES.QUES_LIST], {
      queryParams: { categories: this.selectedCategories.join(',') }
    });
  }
}
