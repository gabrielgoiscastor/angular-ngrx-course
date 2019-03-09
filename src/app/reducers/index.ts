import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import { AuthActionTypes } from '../auth/auth.actions';

type AuthState = {
  loggedIn: boolean,
  userProfile: User
}

const initialAuthState: AuthState = {
  loggedIn: false,
  userProfile: undefined
}

export interface AppState {
  auth: AuthState,
}

function authReducer(state: AuthState = initialAuthState, action): AuthState{
  console.log(action);
  switch(action.type){
    case AuthActionTypes.LoginAction:{
      return {
        loggedIn: true,
        userProfile: action.payload.user
      }
    }
    case AuthActionTypes.LogoutAction:{

    }
  }

  return state;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
