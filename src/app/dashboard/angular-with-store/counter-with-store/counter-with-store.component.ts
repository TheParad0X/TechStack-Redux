import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appActions from 'app/store/app.actions';
import * as appSelectors from 'app/store/app.selectors';

@Component({
  selector: 'app-counter-with-store',
  templateUrl: './counter-with-store.component.html',
  styleUrls: ['./counter-with-store.component.css']
})
export class CounterWithStoreComponent {

  public selectCounter = appSelectors.selectCounter;

  constructor(public store: Store<any>) {
  }

  public onIncrement() {
    this.store.dispatch(appActions.DoIncrementCounter());
  }

  public onDecrement() {
    this.store.dispatch(appActions.DoDecrementCounter());
  }
}
