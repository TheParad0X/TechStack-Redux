import {createAction, props} from '@ngrx/store';

export const DoSetCurrentUser = createAction('[App] Do Set Current User', props<{ updatedUser: string }>());
