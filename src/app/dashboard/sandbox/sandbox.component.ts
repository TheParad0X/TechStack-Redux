import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appActions from 'app/store/app.actions';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent {

  constructor(public store: Store<any>) {
  }

  public test() {
    this.store.dispatch(appActions.Test());
  }

}
