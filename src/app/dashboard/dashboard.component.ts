import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appSelectors from 'app/store/app.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {


  public selectCurrentUser = appSelectors.selectCurrentUser;

  constructor(public store: Store<any>) {
  }

  ngOnInit(): void {
  }

  public onLogout() {

  }

}
