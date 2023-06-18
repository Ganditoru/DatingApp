import { createAction, props } from "@ngrx/store";
import { Member } from "src/app/_models/member";
import { User } from "src/app/_models/user";


export const selectMember = createAction(
  '[Member Page] Select', props<{ member: Member }> ()
);

export const deselectMember = createAction(
  '[Member Page] Deselect'
);

export const loadMembers = createAction(
  '[Member Page] Load Members'
);

export const loadMembersSuccess = createAction(
  '[Member Page] Load Members Success', props<{ members: Member[] }> ()
);

export const loadMembersError = createAction(
  '[Member Page] Load Members Error', props<{ error: string }> ()
);
