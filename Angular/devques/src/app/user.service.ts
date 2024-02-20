import { Injectable } from '@angular/core';

import { User } from './log-in/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userList : User[] =[];

  constructor(private _httpClient :HttpClient) { }

  addUser(user: User){
    this.userList.push(user)
  }

  addUserByServer(user: User){
    return this._httpClient.post<User>('https://localhost:7068/api/User' , user)
  }

  getUserById(id: number): Observable<User> {
    return this._httpClient.get<User>(`bla/${id}`)
  }
}
