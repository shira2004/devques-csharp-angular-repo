import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';  

import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private cachedData: Company[] | null = null;

  constructor(private _httpClient: HttpClient) { }

  getAllCompaniesByServer(): Observable<Company[]> {
    // If data is already cached, return it as an observable
    if (this.cachedData) {
      return of(this.cachedData);
    }

    // If data is not cached, make a request to the server and cache the result
    return this._httpClient.get<Company[]>('https://localhost:7068/api/Company')
      .pipe(
        // Update the cachedData variable after successfully fetching data
        tap((data: Company[]) => this.cachedData = data)
      );
  }
}
