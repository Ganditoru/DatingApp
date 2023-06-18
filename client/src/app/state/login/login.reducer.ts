import { Action, State, createReducer, on } from "@ngrx/store";
import { User } from "src/app/_models/user";
import { loadLogin, loadLoginError, loadLoginSuccess, login, logout } from "./login.actions";

export type Status = "pending" | "loading" | "error" | "success";

export interface LoginState extends User {
  error: string;
  status: Status
}

export const initialLoginState: LoginState = {
  username: "",
  token: "",
  error: null,
  status: "pending",
};

export const loginReducer = createReducer(
  initialLoginState,
  on(login, (state, { user }) => ({ ...state, username: user.username, token: user.token   })),
  on(logout, (state) => ({ username: "", token: "", error: null,  status: "pending" as Status })),

  on(loadLogin, (state) => ({ ...state, status: 'loading' as Status   })),
  on(loadLoginSuccess, (state, { user }) => ({ ...state, username: user.username, token: user.token, status: "success" as Status   })),
  on(loadLoginError, (state, { error }) => ({ ...state, error: error, status: 'error' as Status   })),
);

export function loginReducerFun(state: LoginState | undefined, action: Action) {
  return loginReducer(state, action);
}
