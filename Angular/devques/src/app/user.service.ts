import { Injectable } from '@angular/core';

import { User } from './user.model';
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

  getUserById(id: number): Observable<User> {
    return this._httpClient.get<User>(`bla/${id}`)
  }
}
