import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from 'app/services/user.service';
import * as appActions from 'app/store/app.actions';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private userService: UserService) {
  }

  addUserRequest$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.AddUserRequest),
    concatMap((action) => this.userService.addUser(action.user).pipe(
      map((user: string) => appActions.AddUserSuccess({ user })),
      catchError((error: string) => of(appActions.AddUserFailure({ errorMessage: error })))
    )),
  ));

  deleteUserRequest$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.DeleteUserRequest),
    concatMap((action) => this.userService.deleteUser(action.user).pipe(
      map((user: string) => appActions.DeleteUserSuccess({ user })),
      catchError((error: string) => of(appActions.DeleteUserFailure({ errorMessage: error })))
    )),
  ));

  loadAllUsersRequest$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.LoadAllUsersRequest),
    switchMap((action) => this.userService.loadAllUsers().pipe(
      map((users: string[]) => appActions.LoadAllUsersSuccess({ users })),
      catchError((error: string) => of(appActions.LoadAllUsersFailure({ errorMessage: error })))
    )),
  ));

  test$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.Test),
    tap(() => console.log('test')),
    switchMap(() => of('test'))
  ), { dispatch: false });

}
