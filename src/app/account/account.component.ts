import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  usernames : User[] = [

new User (1,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
new User (2,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
new User (3,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
new User (4,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
new User (5,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
new User (6,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
new User (7,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),
new User (8,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',),

];

toggleDetails(index){
  this.usernames[index].showRepo = !this.usernames[index].showRepo;
}

  constructor() { }

  ngOnInit() {
  }

}
