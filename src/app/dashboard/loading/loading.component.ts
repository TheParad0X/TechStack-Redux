import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appActions from 'app/store/app.actions';
import * as appSelectors from 'app/store/app.selectors';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {

  public selectLoading = appSelectors.selectLoading;

  constructor(public store: Store<any>) {
  }

  public onStartLoading() {
    this.store.dispatch(appActions.DoSetLoading({ loading: true }));
  }

  public onStopLoading() {
    this.store.dispatch(appActions.DoSetLoading({ loading: false }));
  }

}
