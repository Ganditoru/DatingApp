import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { LoginState } from 'src/app/state/login/login.reducer';
import { selectUserName } from 'src/app/state/login/login.selector';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member;

  constructor() {
  }

  ngOnInit() {
  }

  public like(){

  }

}
