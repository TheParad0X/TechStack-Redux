import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {

  public counter = 0;

  constructor(public store: Store<any>) {
  }

  public onNumberChanged(counter: number) {
    this.counter = counter;
  }


}
