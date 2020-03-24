import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as appActions from 'app/store/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public usernameModel: string;
  public passwordModel: string;

  constructor(private store: Store<any>, private router: Router) {
  }

  public onLogin() {
    console.log(this.usernameModel, this.passwordModel);
    this.store.dispatch(appActions.DoSetCurrentUser({ user: this.usernameModel }));
    this.router.navigate(['dashboard']);
  }

}
