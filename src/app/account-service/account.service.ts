import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

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
