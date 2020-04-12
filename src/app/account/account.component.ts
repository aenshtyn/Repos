import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { AccountService } from '../account-service/account.service';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../github-class/profile'

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



  // constructor(accountService:AccountService, private http:HttpClient ) {
  // this.usernames = accountService.getUsers()

// = [
//
// new User (1,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
// new User (2,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
// new User (3,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
// new User (4,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
// new User (5,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
// new User (6,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
// new User (7,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
// new User (8,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
//
// ];

// toggleDetails(index){
//   this.usernames[index].showRepo = !this.usernames[index].showRepo;
// }


  ngOnInit() {

    interface ApiResponse{
    name:string;
    quote:string;
  };

  // this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
  //       // Succesful API request
  //       this.profile = new Profile(data.name, data.quote)
  //     })
    }
