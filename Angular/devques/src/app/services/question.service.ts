// question.service.ts
import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

// import  shuffle from 'array-shuffle';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  createQuestionWithImage(formData: FormData) {
    throw new Error('Method not implemented.');
  }
  private selectedQuestionSubject = new BehaviorSubject<Question | null>(null);
  selectedQuestion$ = this.selectedQuestionSubject.asObservable();

  constructor(private _httpClient: HttpClient) { }

  getAllQuestionByServer(): Observable<Question[]> {
    console.log('getAllQuestionByServer');
    return this._httpClient.get<Question[]>('https://localhost:7068/api/Question');
  }

  setSelectedQuestion(question: Question) {
    this.selectedQuestionSubject.next(question);
  }


  getQuestionsByCategoryIds(categoryIds: number[]): Observable<Question[]> {
    console.log('getQuestionsByCategoryIds', categoryIds);
  
    return this._httpClient.post<Question[]>('https://localhost:7068/api/Question/category', categoryIds);
  }

  getRandQuestionsByCategoryIds(categoryIds: number[]): Observable<Question[]> {
    return this.getQuestionsByCategoryIds(categoryIds).pipe(
      // map(questions => shuffle(questions).slice(0, 10))
    );
  }
  // addQuestionWithDrag(ques: Question): Observable<Question> {
  //   return this._httpClient.post<Question>('https://localhost:7068/api/Question', ques);
  // }

  
  createQuestion(ques: Question): Observable<Question> {
    return this._httpClient.post<Question>('https://localhost:7068/api/Question', ques);
  }

  // getQuestByIdFromServer(id: number): Observable<Question> {
  //   return this._httpClient.get<Question>(`blablabla/${id}`);
  // }
}
