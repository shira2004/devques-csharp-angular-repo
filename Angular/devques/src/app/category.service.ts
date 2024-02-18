import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient: HttpClient) { }
  getAllCategoriesByServer(): Observable<Category[]> {
    return this._httpClient.get<Category[]>('https://localhost:7068/api/Category')
  }
}
