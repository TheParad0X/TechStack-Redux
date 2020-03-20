import {createReducer} from '@ngrx/store';

export interface AppState {
  currentUser: string;
}

const initialState: AppState = {
  currentUser: ''
};


export const appReducer = createReducer(
  initialState,
  // on(currentUserActions.DoUpdateUser, (state, { updatedUser }) => ({ ...state, currentUser: updatedUser })),
  // on(currentUserActions.DoUpdateUserDisplayName, (state, { updatedDisplayName }) => ({
  //     ...state,
  //     currentUser: {
  //       ...state.currentUser,
  //       displayName: updatedDisplayName
  //     }
  //   })
);
