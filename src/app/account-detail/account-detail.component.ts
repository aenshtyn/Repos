import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { Repository } from '../repository';
import { AccountService } from '../account-service/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  user: User;

  constructor(private route:ActivatedRoute, private service:AccountService)) { }

  ngOnInit(){
    let id = this.route.snapshot.paramMap.get('id');
      this.user = this.service.getUser(id)
    }

}
