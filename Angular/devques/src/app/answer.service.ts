import { Injectable } from '@angular/core';
import { Answer } from './answer.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

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
  
    return this._httpClient.post<Answer[]>('https://localhost:7068/api/Answer/category', categoryIds)
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
