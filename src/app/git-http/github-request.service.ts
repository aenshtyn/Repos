import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profile } from '../github-class/profile'

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  profile: Profile;


  constructor(private http:HttpClient) {
    this.profile = new Profile("","");
   }) { }
}

profileRequest(){
   interface ApiResponse{
     quote:string;
     name:string;
   }
   let promise = new Promise((resolve,reject)=>{
          this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
            this.profile.quote = response.quote
            this.profile.name = response.name

            resolve()
          },
          error=>{
         this.profile.quote = "Never, never, never give up"
         this.profile.name = "Winston Churchill"

         reject(error)
       })
     })
     return promise
   }
}
