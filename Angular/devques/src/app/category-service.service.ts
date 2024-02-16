import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './category.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private category = Category
  public categoryList: Category[] = [
    { CategoryId: 1, CategoryName: "Fake Category 1" },
    { CategoryId: 2, CategoryName: "Fake Category 2" },
    { CategoryId: 3, CategoryName: "Fake Category 3" },
    { CategoryId: 4, CategoryName: "Fake Category 4" }
  ]
  constructor( private _httpClient:HttpClient) { }

  getAllCategory(){
    return this.categoryList
  }

  getAllCategoriesByServer(): Observable<Category[]> {
    return this._httpClient.get<Category[]>('blaa')
  }

  addCategory(category: Category) {
    this.categoryList.push(category)
  }
}
