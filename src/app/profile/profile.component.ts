import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as appActions from 'app/store/app.actions';
import * as appSelectors from 'app/store/app.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {

  public selectCurrentUser = appSelectors.selectCurrentUser;

  constructor(public store: Store<any>, private router: Router) {
  }

  public onLogout() {
    this.store.dispatch(appActions.DoSetCurrentUser({ user: '' }));
    this.router.navigate(['login']);
  }

}
