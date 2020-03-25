import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appActions from 'app/store/app.actions';
import * as appSelectors from 'app/store/app.selectors';

@Component({
  selector: 'app-user-list-backend',
  templateUrl: './user-list-backend.component.html',
  styleUrls: ['./user-list-backend.component.css']
})
export class UserListBackendComponent {

  public selectAllUsers = appSelectors.selectAllUsers;
  public newUserNgModel: string;

  constructor(public store: Store<any>) {
  }

  public onAddUser() {
    this.store.dispatch(appActions.AddUserRequest({ user: this.newUserNgModel }));
    this.newUserNgModel = '';
  }

  public onDeleteUser(user: string) {
    this.store.dispatch(appActions.DeleteUserRequest({ user }));
  }

}
