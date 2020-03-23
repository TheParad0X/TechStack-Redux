import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';

export interface AppState {
  currentUser: string;
  users: string[];
}

const initialState: AppState = {
  currentUser: '',
  users: []
};

export const appReducer = createReducer(
  initialState,
  //on(appActions.DoSetCurrentUser, (state, { user }) => ({ ...state, currentUser: user })),
  on(appActions.DoSetCurrentUser, (state, { user }) => {
    return { ...state, currentUser: user };
  }),
  on(appActions.DoAddUser, (state, { user }) => {
    return { ...state, users: [...state.users, user] };
  }),
  on(appActions.DoDeleteUser, (state, { user }) => {
    const newArray = state.users.filter(u => u !== user);
    return { ...state, users: newArray };

  }),
);
