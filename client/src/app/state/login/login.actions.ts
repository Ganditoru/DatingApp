import { createAction, props } from "@ngrx/store";
import { User } from "src/app/_models/user";


export const login = createAction(
  '[Login Page] Login', props<{ user: User }> ()
);

export const logout = createAction(
  '[Login Page] Logout'
);

export const loadLogin = createAction(
  '[Login Page] Load Login'
);

export const loadLoginSuccess = createAction(
  '[Login Page] Lgoin Success', props<{ user: User }> ()
);

export const loadLoginError = createAction(
  '[Login Page] Login Error', props<{ error: string }> ()
);
