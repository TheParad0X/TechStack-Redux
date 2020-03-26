import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';


export interface AppState {

  counter: number;

  users: string[];
  loading: boolean;
  currentUser: string;
}


const initialState: AppState = {
  counter: 0,

  currentUser: '',
  users: [],
  loading: false
};

export const appReducer = createReducer(
  initialState,
  on(appActions.DoIncrementCounter, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    };
  }),

  on(appActions.DoDecrementCounter, (state) => ({ ...state, counter: state.counter - 1 })),



























  on(appActions.DoAddUser, (state, { user }) => {
    return {
      ...state,
      users: [...state.users, user]
    };
  }),

  on(appActions.DoDeleteUser, (state, { user }) => {
    const newArray = state.users.filter(u => u !== user);
    return { ...state, users: newArray };
  }),






































  on(appActions.AddUserSuccess, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(appActions.DeleteUserSuccess, (state, { user }) => {
    const newArray = state.users.filter(u => u !== user);
    return { ...state, users: newArray };
  }),


  on(appActions.LoadAllUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),


  on(appActions.DoSetCurrentUser, (state, { user, }) => {
    return { ...state, currentUser: user };
  }),

  on(appActions.DoSetLoading, (state, { loading }) => {
    return { ...state, loading };
  }),
);
