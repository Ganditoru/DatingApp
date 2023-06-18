import { ActionReducerMap, combineReducers } from "@ngrx/store";
import { LoginState, loginReducer, loginReducerFun } from "./login/login.reducer";
import { MemberState, memberReducer, memberReducerFun } from "./member/member.reducer";
import { ModuleWithProviders } from "@angular/core";
import { EffectsRootModule } from "@ngrx/effects";
import { MemberEffects } from "./member/member.effects";


export interface AppState {
  login: LoginState,
  member: MemberState
}


export const initialAppState: ActionReducerMap<AppState> = {
  login: loginReducer,
  member: memberReducer,
};

export const rootEffects = [MemberEffects]
