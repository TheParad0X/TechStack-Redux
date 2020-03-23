import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions) {
  }

  // @Effect()
  // loadResponsibleUsersRequest$: Observable<Action> = this.actions$.pipe(
  //   ofType(masterDataActions.LoadResponsibleUsersRequest),
  //   switchMap(() => this.masterDataService.loadAllResponsibleUsers().pipe(
  //     map((result: ResponsibleUserResponseDto[]) => result.map(user => new SelectSearchEntryModel(user.id, user.name))),
  //     map((entries: SelectSearchEntryModel[]) => masterDataActions.LoadResponsibleUsersSuccess({ entries })),
  //     catchError((error: ErrorMessageResponseDto) => of(masterDataActions.LoadResponsibleUsersFailure({ error })))
  //   )),
  // );


}
