import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { MemberState } from "./member.reducer";


export const selectMember = (state: AppState) => state.member;

export const selectMembers = createSelector(
  selectMember,
  (state: MemberState) => {
    console.log(" The state is ")
    console.log(state)
    return state?.members

  }
)

export const selectStatus = createSelector(
  selectMember,
  (state: MemberState) => state?.status
)

export const selectSelectedMember = createSelector(
  selectMember,
  (state: MemberState) => state?.selectedMember
)
