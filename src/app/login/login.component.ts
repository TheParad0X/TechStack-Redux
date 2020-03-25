import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from 'app/services/authentication.service';
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

  constructor(private store: Store<any>,
    private snackBar: MatSnackBar,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  public onLogin() {
    this.authenticationService.handleLogin(this.usernameModel, this.passwordModel).subscribe(
      (username) => {
        this.store.dispatch(appActions.DoSetCurrentUser({ user: username }));
        this.router.navigate(['dashboard']);
      },
      (error => this.snackBar.open(error, undefined, { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['error-snackbar'] }))
    );
  }
}
