import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UserService } from 'app/services/user.service';
import * as appActions from 'app/store/app.actions';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  @Effect()
  addUserRequest$: Observable<Action> = this.actions$.pipe(
    ofType(appActions.AddUserRequest),
    switchMap((action) => this.userService.addUser(action.user).pipe(
      map((user: string) => appActions.AddUserSuccess({ user })),
      catchError((error: string) => of(appActions.AddUserFailure({ errorMessage: error })))
    )),
  );
  @Effect()
  deleteUserRequest$: Observable<Action> = this.actions$.pipe(
    ofType(appActions.DeleteUserRequest),
    switchMap((action) => this.userService.deleteUser(action.user).pipe(
      map((user: string) => appActions.DeleteUserSuccess({ user })),
      catchError((error: string) => of(appActions.DeleteUserFailure({ errorMessage: error })))
    )),
  );

  constructor(private actions$: Actions, private userService: UserService) {
  }
}
