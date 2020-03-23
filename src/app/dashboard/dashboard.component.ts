import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as appActions from 'app/store/app.actions';
import * as appSelectors from 'app/store/app.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  public selectCurrentUser = appSelectors.selectCurrentUser;
  public selectAllUsers = appSelectors.selectAllUsers;

  public newUserNgModel: string;

  constructor(public store: Store<any>, private router: Router) {
  }

  ngOnInit(): void {
  }

  public onLogout() {
    this.store.dispatch(appActions.DoSetCurrentUser({ user: '' }));
    this.router.navigate(['login']);
  }

  public onAddUser() {
    this.store.dispatch(appActions.DoAddUser({ user: this.newUserNgModel }));
    this.newUserNgModel = '';
  }

  public onDeleteUser(user: string) {
    this.store.dispatch(appActions.DoDeleteUser({ user }));
  }

}
