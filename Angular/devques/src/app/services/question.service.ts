// question.service.ts
import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { questionForUser } from '../models/questionForUser';

import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public isArrow!: boolean;
  createQuestionWithImage(formData: FormData) {
    throw new Error('Method not implemented.');
  }
  private selectedQuestionSubject = new BehaviorSubject<Question | null>(null);
  selectedQuestion$ = this.selectedQuestionSubject.asObservable();

  public currentQuestions: Question[] = []

  constructor(private _httpClient: HttpClient) { }

  setSelectedQuestion(question: Question) {
    this.selectedQuestionSubject.next(question);
  }


 getQuestionsByCategoryIds(categoryIds: number[]): Observable<Question[]> {
  console.log('getQuestionsByCategoryIds', categoryIds);
  this.isArrow = false;
  const params = new HttpParams().set('categoryIds', categoryIds.join(','));

  return this._httpClient.get<Question[]>('https://localhost:7068/api/Question/category', { params });
}




  createQuestion(ques: Question): Observable<Question> {
    return this._httpClient.post<Question>('https://localhost:7068/api/Question', ques);
  }

  dragQuestLevel(quesForUser: questionForUser): Observable<questionForUser> {
    return this._httpClient.post<questionForUser>('https://localhost:7068/api/QuestionForUser', quesForUser);
  }



}
