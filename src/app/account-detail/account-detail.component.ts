import { Component, OnInit } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Input() username: User;

  constructor() { }

  ngOnInit(): void {
  }

}
