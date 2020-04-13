import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../github-class/profile';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  profile: Profile;


  constructor(private http:HttpClient) {
    this.profile = new Profile('', '', '', '', '','');
  }

  profileRequest(){
    interface ApiResponse{
      name: string;
      person_url: string;
      followers: string;
      following: string;
      html_url: string;
      login: string;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{

        this.profile.name = response.name;
        this.profile.person_url = response.person_url;
        this.profile.login = response.login;
        this.profile.html_url = response.html_url;

        resolve()
      },
      error=>{
        this.profile.name = "This user doesnt exist. Kindly check again."
        reject(error)
      })
    })
    return promise
  }
}
