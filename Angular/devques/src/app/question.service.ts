import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private que = Question

  // public queList: Question[] = [{
  //   questionId: 1,
  //   content:"this is fake content" ,
  //   Company:"intel"
    
  // },{
  //   questionId: 2,
  //   content:"this is fake2 content" ,
  //   Company:"sqlink"
    
  // },{
  //   questionId: 3,
  //   content:"this is fake2 content" ,
  //   Company:"sqlink"
    
  // },{
  //   questionId: 4,
  //   content:"this is fake2 content" ,
  //   Company:"sqlink"
    
  // },{
  //   questionId: 2,
  //   content:"this is fake2 content" ,
  //   Company:"sqlink"
    
  // }];
  

  constructor(private _httpClient: HttpClient) { }
 

  getAllQuestionByServer(): Observable<Question[]> {
    return this._httpClient.get<Question[]>('https://localhost:7068/api/Question')
  }

  createQuestion(ques: Question){
    return this._httpClient.post<Question>('https://localhost:7068/api/Question' , ques)
  }

  getQuestByIdFromServer(id: number): Observable<Question> {
    return this._httpClient.get<Question>(`blablabla/${id}`)
  }

}
