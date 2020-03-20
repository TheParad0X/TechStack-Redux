import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public username: string;
  public password: string;

  constructor() {
  }

  public onLogin() {
    console.log(this.username, this.password);
  }

}
