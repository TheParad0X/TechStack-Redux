import { createAction, props } from '@ngrx/store';

export const DoIncrementCounter = createAction('[App] Do Increment Counter');
export const DoDecrementCounter = createAction('[App] Do Decrement Counter');

export const DoSetCurrentUser = createAction('[App] Do Set Current User', props<{ user: string }>());
export const DoAddUser = createAction('[App] Do Add  User', props<{ user: string }>());
export const DoDeleteUser = createAction('[App] Do Delete User', props<{ user: string }>());
export const DoSetLoading = createAction('[App] Do Set Loading', props<{ loading: boolean }>());
