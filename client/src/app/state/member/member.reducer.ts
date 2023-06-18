import { Action, State, createReducer, on } from "@ngrx/store";
import { User } from "src/app/_models/user";
import { deselectMember, loadMembers, loadMembersError, loadMembersSuccess, selectMember } from "./member.actions";
import { Member } from "src/app/_models/member";

export type Status = "pending" | "loading" | "error" | "success";

export interface MemberState {
  selectedMember: Member;
  members: Member[];
  error: string;
  status: Status;
}

export const initialMemberState: MemberState = {
  selectedMember: null,
  members: [],
  error: null,
  status: "pending" as Status
};

export const memberReducer = createReducer(
  initialMemberState,
  on(selectMember, (state, { member }) => ({ ...state, selectedMember: member   })),
  on(deselectMember, (state) => ({ ...state, selectedMember: null   })),

  on(loadMembers, (state) => { console.log("LoadMember - Reducer"); return { ...state, status: 'loading' as Status   } }),
  on(loadMembersSuccess, (state, { members }) => {
    console.log("LoadMember Success");
    return { ...state, members: members, selectedMember: null, status: "success" as Status   }
  }),
  on(loadMembersError, (state, { error }) => {
    console.log("LoadMember Error");
    return { ...state, members: [], selectedMember: null, error: error, status: 'error' as Status };
  }),
);

export function memberReducerFun(state: MemberState | undefined, action: Action) {
  return memberReducer(state, action);
}
