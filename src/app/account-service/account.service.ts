// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { User } from '../user';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AccountService {
//
//    private username: string;
//
//   getUsers(){
//   return User
// }
//
//  getUser(id){
//     for (let user of User){
//       if (user.id == id){
//         return user;
//       }
//     }
//   }
//
//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private username: string;
  private clientid: '13d169e4441ca579d7b6';
  private clientsecret: ' 7903f9eac4752c4e8daa136eb820fd86dc991e30';

  constructor(private http: HttpClient) {
     console.log("Service is now ready!");
     this.username = 'aenshtyn';
   }
   getAccountInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid +"&client_secret=" + this.clientsecret);
   }
   getAccountRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid +"&client_secret=" + this.clientsecret);
   }
   updateAccount(username: string){
      this.username = username;
   }
  }
