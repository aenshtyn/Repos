import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { AccountService } from '../account-service/account.service';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../github-class/profile';
import { GithubRequestService } from '../git-http/github-request.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  usernames : User[] ;
  profile : Profile;

  this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{

    this.quote = new Quote(data.author, data.quote)
  },err=>{
    this.quote = new Quote("Winston Churchill","Never never give up!")
    console.log("An error occurred")
  })



  constructor(accountService:AccountService, private githubService:GithubRequestService) {
    this.usernames = accountService.getUsers()
  }

    toggleDetails(index){
      this.usernames[index].showRepo = !this.usernames[index].showRepo;
    }


    ngOnInit() {

      this.githubService.githubRequest()
      this.profile = this.githubService.profile
    }

    // this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
    //       // Succesful API request
    //       this.profile = new Profile(data.name, data.quote)
    //     })
  }
