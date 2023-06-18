import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { selectMembers, selectStatus } from 'src/app/state/member/member.selector';
import { loadMembers } from 'src/app/state/member/member.actions';
import { Observable } from 'rxjs';
import { Status } from 'src/app/state/member/member.reducer';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
 members: Member[];

  members$: Observable<Member[]>;
  status$: Observable<Status>;

  constructor( private memberService: MembersService, private store: Store) {
      this.members$ = this.store.select(selectMembers);
      this.status$ = this.store.select(selectStatus);
    }

  ngOnInit() {
    //this.loadMembers();


    this.members$.subscribe(members => {
          this.members = members;
          console.log('Members' + members)
          console.log( members)
        });

        this.store.dispatch(loadMembers());
  }

  // loadMembers() {
  //   this.memberService.getMembers()
  // }

}
