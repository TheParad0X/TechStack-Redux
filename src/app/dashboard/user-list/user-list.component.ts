import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appActions from 'app/store/app.actions';
import * as appSelectors from 'app/store/app.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {

  public selectAllUsers = appSelectors.selectAllUsers;
  public newUserNgModel: string;

  constructor(public store: Store<any>) {
  }

  public onAddUser() {
    this.store.dispatch(appActions.DoAddUser({ user: this.newUserNgModel }));
    this.newUserNgModel = '';
  }

  public onDeleteUser(user: string) {
    this.store.dispatch(appActions.DoDeleteUser({ user }));
  }

}
