import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

@Injectable()
export class AuthenticationService {

  constructor(
    private store: Store<any>) {
  }

  public handleLogin(username: string, password: string) {
    console.log(username, password, new Date().toISOString());
    // this.store.dispatch(configurationActions.LoadConfigurationRequest());
  }

}
