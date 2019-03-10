import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions, AuthActionTypes } from './auth.actions';


export interface AuthState {
  loggedIn: boolean,
  userProfile: User
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  userProfile: undefined,
};

export function authReducer(state = initialAuthState,
  action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.LoginAction:
    {
      return {
        loggedIn: true,
        userProfile: action.payload.user
      }
    }

    case AuthActionTypes.LogoutAction:
    {
      return{
        loggedIn: false,
        userProfile: undefined
      }
    }
    
    default:
      return state;
  }
}
