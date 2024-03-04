import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private cachedCategories: Category[] | null = null;

  constructor(private _httpClient: HttpClient) { }

  getAllCategoriesByServer(): Observable<Category[]> {
    // If categories are already cached, return them as an observable
    if (this.cachedCategories) {
      console.log('without server call 🤩');
      return of(this.cachedCategories);
    }
    console.log('go to call  server 😢')

    return this._httpClient.get<Category[]>('https://localhost:7068/api/Category')
      .pipe(
        tap((categories: Category[]) => this.cachedCategories = categories)
      );
  }
}
