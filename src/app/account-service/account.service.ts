import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  getUser(){
  return User
}

  constructor() { }
}
