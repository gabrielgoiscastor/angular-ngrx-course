import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action'
}

export class Login implements Action {

  constructor(readonly payload: {user: User}){
    console.log('LoginAction');
    console.log(this.payload);
  }

  readonly type = AuthActionTypes.LoginAction;
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = Login;
