import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';

export interface AppState {
  counter: number;
  currentUser: string;
  users: string[];
  loading: boolean;
}

const initialState: AppState = {
  counter: 0,
  currentUser: '',
  users: [],
  loading: false
};

export const appReducer = createReducer(
  initialState,

  on(appActions.DoIncrement, (state) => ({ ...state, counter: state.counter + 1 })),
  on(appActions.DoIncrement, (state) => ({ ...state, counter: state.counter - 1 })),

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
  on(appActions.DoSetLoading, (state, { loading }) => {
    return { ...state, loading };
  }),
);
