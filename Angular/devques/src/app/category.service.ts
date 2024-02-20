import { log } from 'console';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from './category.model';

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

    // If categories are not cached, make a request to the server and cache the result
    return this._httpClient.get<Category[]>('https://localhost:7068/api/Category')
      .pipe(
        // Update the cachedCategories variable after successfully fetching data
        tap((categories: Category[]) => this.cachedCategories = categories)
        
      );
  }
}
