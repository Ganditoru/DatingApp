import { Injectable } from "@angular/core";
import { AppState } from "../app.state";
import { AccountService } from "src/app/_services/account.service";
import { Store, } from "@ngrx/store";
import { of, from, pipe, map } from "rxjs";
import { catchError, switchMap, withLatestFrom } from "rxjs/operators";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { deselectMember, loadMembers, loadMembersError, loadMembersSuccess } from "./member.actions";
import { MembersService } from "src/app/_services/members.service";
import { Member } from "src/app/_models/member";
import { selectMembers } from "./member.selector";

@Injectable()
export class MemberEffects {

  constructor(
    private  actions$: Actions,
    private store: Store,
    private memberService: MembersService
  ) {}


  loadEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(loadMembers),
        switchMap(() =>
          this.memberService.getMembers().pipe(
            map((response) => {
              console.log("Response:", response);
              //this.store.dispatch(loadMembersSuccess({ members: response }));
              return loadMembersSuccess({ members: response });
            }),
            catchError((error) => of(loadMembersError(error)))
          )
        )
    );
  });

  effectName$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(loadMembersSuccess),
        switchMap(() =>
          {
            console.log("loadMembersSuccess:");
            this.store.select(selectMembers).subscribe(members => {
              console.log( members)
            });

            return of(deselectMember())
          }
        )
    );
  });



  // effectName2$ = createEffect(() => {
  //   return this.actions$.pipe(
  //       ofType(loadLogin),
  //       withLatestFrom(this.store.select(sellectAll)),
  //       switchMap( ([action, todos]) => from (this.accountService.save(todos)))
  //   );
  // });


}
