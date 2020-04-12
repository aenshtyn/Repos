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
    {name:'mohamed', login:'mohamed', following:'mohamed', html_url:'mohamed'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
