import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, tap } from 'rxjs';

import { Answer } from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  
  private answerList: Answer[] = []; 

  constructor(private _httpClient: HttpClient) { }

  addAnswer(ans: Answer): Observable<Answer> {
    return this._httpClient.post<Answer>('https://localhost:7068/api/Answer' , ans);
  }

  getAnswersByCategoryIds(categoryIds: number[]): Observable<Answer[]> {
    console.log('getAnswersByCategoryIds', categoryIds);
  
    const params = new HttpParams().set('categoryIds', categoryIds.join(','));
    return this._httpClient.get<Answer[]>('https://localhost:7068/api/Answer/category', {params})
      .pipe(
        tap(answers => this.answerList = answers) 
      );
  }



  getStoredAnswers(): Answer[] {
    return this.answerList; 
  }

  createAnswer(ans: Answer): Observable<Answer> {
    return this._httpClient.post<Answer>('https://localhost:7068/api/Answer', ans);
  }
}
