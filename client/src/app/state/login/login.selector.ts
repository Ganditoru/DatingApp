import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { LoginState } from "./login.reducer";


export const selectLogin = (state: AppState) => state.login;

export const selectUserName = createSelector(
  selectLogin,
  (state: LoginState) => state?.username
)
