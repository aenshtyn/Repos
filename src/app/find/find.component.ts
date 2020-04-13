import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../github-class/profile';
import { GithubRequestService } from '../git-http/github-request.service';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  providers:[GithubRequestService],
})
export class FindComponent implements OnInit {

  profile: Profile ;

  constructor(private http:HttpClient, private githubService: GithubRequestService, )
  {
   }

  ngOnInit() {
    this.githubService.profileRequest()
    this.profile=this.githubService.profile
  }

}
