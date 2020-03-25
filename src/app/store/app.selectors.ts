import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>('appState');

export const selectCounter = createSelector(
  selectAppState,
  (state) => state.counter
);

export const selectCurrentUser = createSelector(
  selectAppState,
  (state) => state.currentUser
);

export const selectAllUsers = createSelector(
  selectAppState,
  (state) => state.users
);

export const selectLoading = createSelector(
  selectAppState,
  (state) => state.loading
);
