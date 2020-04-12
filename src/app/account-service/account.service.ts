import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   private username: string;

  getUsers(){
  return User
}

 getUser(id){
    for (let user of Users){
      if (goal.id == id){
        return user;
      }
    }
  }

  constructor() { }
}
