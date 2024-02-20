import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-selction',
  standalone: true,
  imports: [MatChipsModule, CommonModule],
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

  confirmSelection(): void {
    console.log('Selected Categories:', this.selectedCategories);

    this.router.navigate(['/ques/ques-list'], {
      queryParams: { categories: this.selectedCategories.join(',') }
    });
  }
}
