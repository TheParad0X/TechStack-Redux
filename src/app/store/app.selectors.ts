import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>('appState');

export const selectCurrentUser = createSelector(
  selectAppState,
  (state) => state.currentUser
);


export const selectAllUsers = createSelector(
  selectAppState,
  (state) => state.users
);
