import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { AccountService } from '../account-service/account.service';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../github-class/profile';
import { GithubRequestService } from '../git-http/github-request.service';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  // goToUrl(id){
  //   this.router.navigate(['/users',id])
  // }
  //
  // usernames : User[] ;
  // profile : Profile;
  //
  //
  //
  // constructor(accountService:AccountService, private githubService:GithubRequestService, private router:Router) {
  //   this.usernames = accountService.getUsers()
  // }
  //
  //   toggleDetails(index){
  //     this.usernames[index].showRepo = !this.usernames[index].showRepo;
  //   }
  //
  //
  //   ngOnInit() {
  //
  //     this.githubService.githubRequest()
  //     this.profile = this.githubService.profile
  //   }

    // this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
    //       // Succesful API request
    //       this.profile = new Profile(data.name, data.quote)
    //     })
  // }

  profile: any = [];
  repos: any = [];
  username: string;
  isCollapsed: boolean= true;
  isCollapsed1: boolean= true;

   constructor( private accountService: AccountService) {

   }
   searchGithub(){
     this.accountService.updateAccount(this.username);
     this.accountService.getAccountInfo().subscribe(profile=>{
       console.log(profile);
       this.profile = profile;
     });
     this.accountService.getAccountRepos().subscribe(repos=>{
       console.log(repos);
       this.repos = repos;
     });
   }
   toggleCollapse(){
     this.isCollapsed = !this.isCollapsed;
   }
   toggleCollapse1(){
     this.isCollapsed1 = !this.isCollapsed1;
   }
   ngOnInit() {
   }

}
