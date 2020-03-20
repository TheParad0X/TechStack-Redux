import {createReducer, on} from '@ngrx/store';
import * as appActions from './app.actions';

export interface AppState {
  currentUser: string;
}

const initialState: AppState = {
  currentUser: ''
};

export const appReducer = createReducer(
  initialState,
  on(appActions.DoSetCurrentUser, (state, {user}) => ({...state, currentUser: user})),
);
