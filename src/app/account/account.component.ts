import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AccountComponent implements OnInit {

  usernames : User[] = [
new User (1,'Mohamed','Mohamed','Mohamed','Mohamed','Mohamed',);

toggleDetails(index){
  this.usernames[index].showRepo = !this.usernames[index].showRepo;
}

  constructor() { }

  ngOnInit() {
  }

}
